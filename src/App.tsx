import React, { useEffect, useReducer, MouseEvent, ChangeEvent } from 'react';
import CONSTANTS from './App.constants';
import reducer from './App.reducer';
import { initialState } from './App.init';
import formatTitle from './App.utils';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickBuy = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch({ 
      type: CONSTANTS.ADD_PRODUCT_TO_CART, 
      payload: event.currentTarget.value 
    });
  };

  const onClickCart = (): void => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    dispatch({
      type: CONSTANTS.FILTER_PRODUCTS,
      payload: event.currentTarget.value
    })
  };

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const json = await res.json();
        if (isMounted) {
          dispatch({
            type: CONSTANTS.LOAD_PRODUCTS_FROM_API,
            payload: json
          });
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
        } 
      }
    };
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <button 
        className='app__cart-button' 
        type='button'
        onClick={onClickCart}
       >
        Cart ({state.productsInCart.length})
      </button>

      {state.isCartVisible && (
        <aside className='app__cart'>
          <ul>
            {state.productsInCart.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </aside>
      )}

      <label htmlFor='select'>Filter</label>
      <select onChange={onChange} value={state.currentFilter} id='select'>
        <option>all</option>
        <option>men clothing</option>
        <option>jewelery</option>
        <option>electronics</option>
        <option>women clothing</option>
      </select>

      {state.productsToRender.length ? (
        <div className='app__products'>
          {state.productsToRender.map((product, index) => (
            <section className='app__product' key={index}>
              <h2>{formatTitle(product.title, 3)}</h2>
              <h3>{product.category}</h3>
              <img className='app__product-img' src={product.image} />
              <p>${product.price}</p>
              <button 
                className='app__button'
                type='button'
                value={product.title}
                onClick={onClickBuy}
              >
                Buy
              </button>
            </section>
          ))}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default App;

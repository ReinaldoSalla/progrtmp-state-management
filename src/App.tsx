import React, { useEffect, useReducer, MouseEvent, ChangeEvent } from 'react';
import CONSTANTS from './App.constants';
import reducer from './App.reducer';
import { initialState } from './App.init';
import formatTitle from './App.utils';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch({ 
      type: CONSTANTS.ADD_PRODUCT_TO_CART, 
      payload: event.currentTarget.value 
    });
  };

  const onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    dispatch({
      type: CONSTANTS.FILTER_PRODUCTS,
      payload: event.currentTarget.value
    })
  }

  useEffect(() => {
    let hasUnmounted = false;
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const json = await res.json();
        if (!hasUnmounted) {
          dispatch({
            type: CONSTANTS.LOAD_PRODUCTS_FROM_API,
            payload: json
          });
        }
      } catch (error) {
        if (!hasUnmounted) {
          console.error(error);
        } 
      }
    };
    fetchProducts();
    return () => {
      hasUnmounted = true;
    };
  }, []);

  return (
    <>
      <button className='app__cart-button' type='button'>
        Cart ({state.productsInCart.length})
      </button>

      <ul>
        {state.productsInCart.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

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
              {/* <p>{product.description}</p> */}
              <img className='app__product-img' src={product.image} />
              <p>${product.price}</p>
              <button 
                className='app__button'
                type='button'
                value={product.title}
                onClick={onClick}
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

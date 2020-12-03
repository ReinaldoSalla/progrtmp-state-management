import React, { useEffect, useReducer, MouseEvent } from 'react';
import CONSTANTS from './App.constants';
import reducer from './App.reducer';
import { initialState } from './App.init';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onBuyClick = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch({ 
      type: CONSTANTS.ADD_PRODUCT_TO_CART, 
      payload: event.currentTarget.value 
    })
  }

  useEffect(() => {
    let unmounted = false;
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const json = await res.json();
      if (!unmounted) {
        dispatch({
          type: CONSTANTS.LOAD_PRODUCTS_FROM_API,
          payload: json
        });
      }
    };
    fetchData();
    return () => {
      unmounted = true;
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

      {state.products.length ? (
        <div className='app__products'>
          {state.products.map((product, index) => (
            <section className='app__product' key={index}>
              <h2>{product.title}</h2>
              <h3>{product.category}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <img className='app__product-img' src={product.image} />
              <br />
              <button 
                type='button'
                value={product.title}
                onClick={onBuyClick}
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

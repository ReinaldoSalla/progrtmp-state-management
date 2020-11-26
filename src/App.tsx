import React, { useReducer } from 'react';
import CONSTANTS from './App.constants';
import reducer from './App.reducer';
import { initialState, init } from './App.init';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <>
      <button className='app__cart' type='button'>
        Cart
      </button>
      <div className='app__products'>
        {CONSTANTS.PRODUCTS.map(({ price, name, description }, index) => (
          <section className='app__product' key={index}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{description}</h4>
            <button 
              type='button'
              onClick={() => dispatch({
                type: CONSTANTS.ADD_PRODUCT,
                payload: name
              })}
            >
              buy
            </button>
          </section>
        ))}
      </div>
    </>
  );
};

export default App;
import React, { useReducer, MouseEvent } from 'react';
import CONSTANTS from './App.constants';
import reducer from './App.reducer';
import { initialState } from './App.init';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBuyClick = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch({ 
      type: CONSTANTS.ADD_PRODUCT, 
      payload: event.currentTarget.value 
    })
  }

  console.log(state);

  return (
    <>
      <button className='app__cart-button' type='button'>
        Cart ({state.products.length})
      </button>

      <ul>
        {state.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      <div className='app__products'>
        {CONSTANTS.PRODUCTS.map(({ price, name, description }, index) => (
          <section className='app__product' key={index}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{description}</h4>
            <button 
              type='button'
              value={name}
              onClick={handleBuyClick}
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

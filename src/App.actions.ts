import { State } from './App.types';

const addProduct = (state: State, product: string): State => {
  return {
    ...state,
    products: [...state.products, product]
  };
}

export { addProduct };
import { State } from './App.types';

const initialState: State = {
  products: []
};

const init = (initialProducts: any) => {
  return { products: initialProducts }
};

export { initialState, init }
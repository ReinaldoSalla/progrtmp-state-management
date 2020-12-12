import { State } from './App.types';

const initialState: State = {
  products: [],
  productsToRender: [],
  productsInCart: [],
  currentFilter: 'all',
  isCartVisible: false
};

export { initialState }
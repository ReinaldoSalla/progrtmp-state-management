import { State } from './App.types';

const addProductToCart = (state: State, product: string): State => {
  return {
    ...state,
    productsInCart: [...state.productsInCart, product]
  };
}

const loadProductsFromApi = (state: State, products: Array<any>) => {
  return {
    ...state,
    products: products
  }
}

export { 
  addProductToCart,
  loadProductsFromApi 
};
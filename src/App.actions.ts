import { State } from './App.types';

const addProductToCart = (state: State, product: string): State => {
  return {
    ...state,
    productsInCart: [...state.productsInCart, product]
  };
}

const loadProductsFromApi = (state: State, products: Array<any>): State => {
  return {
    ...state,
    products: products
  }
};

const filterProducts = (state: State, filterKeyword: string): State => {
  console.log(state.products);
  const filteredProducts = state.products.filter((product) => (
    product.category === filterKeyword
  ));
  return {
    ...state,
    currentFilter: filterKeyword,
    products: filteredProducts
  };
};

export { 
  addProductToCart,
  loadProductsFromApi,
  filterProducts
};
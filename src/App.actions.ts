import { State } from './App.types';

const addProductToCart = (state: State, product: string): State => {
  return {
    ...state,
    productsInCart: [...state.productsInCart, product]
  };
}

const loadProductsFromApi = (state: State, productsFromApi: Array<any>): State => {
  return {
    ...state,
    products: productsFromApi,
    productsToRender: productsFromApi 
  };
};

const filterProducts = (state: State, filterKeyword: string): State => {
  let filteredProducts;
  if (filterKeyword === 'all') {
    filteredProducts = state.products
  } else {
    filteredProducts = state.products.filter((product) => { 
      return product.category === filterKeyword
    });
  }
  return {
    ...state,
    currentFilter: filterKeyword,
    productsToRender: filteredProducts
  };
};

const toggleCart = (state: State): State => ({
  ...state,
  isCartVisible: !state.isCartVisible
})

export { 
  addProductToCart,
  loadProductsFromApi,
  filterProducts,
  toggleCart
};
import CONSTANTS from './App.constants';
import { 
  addProductToCart,
  loadProductsFromApi 
} from './App.actions';
import { State, Action } from './App.types';

const reducer = (state: State, action: any): State => {
  switch (action.type) {
    case CONSTANTS.ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action.payload);
    case CONSTANTS.LOAD_PRODUCTS_FROM_API:
      return loadProductsFromApi(state, action.payload)
    default:
      return state;
  }
};

export default reducer;
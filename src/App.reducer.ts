import CONSTANTS from './App.constants';
import { addProduct } from './App.actions';
import { State, Action } from './App.types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CONSTANTS.ADD_PRODUCT:
      return addProduct(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
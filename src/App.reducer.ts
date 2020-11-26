import CONSTANTS from './App.constants';
import { addProduct } from './App.actions';

const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case CONSTANTS.ADD_PRODUCT:
      return addProduct(state, action.payload);
  }
};

export default reducer;
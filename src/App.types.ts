import CONSTANTS from './App.constants';

interface State {
  products: Array<string>;
}

interface ADD_PRODUCT {
  type: typeof CONSTANTS.ADD_PRODUCT;
}

interface Action {
  type: string;
  payload: string;
}

export type {
  State,
  Action
}

interface State {
  products: Array<any>;
  productsInCart: Array<string>;
}

interface Action {
  type: string;
  payload?: string;
}

export type {
  State,
  Action
}

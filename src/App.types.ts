interface State {
  products: Array<any>;
  productsToRender: Array<any>;
  productsInCart: Array<string>;
  currentFilter: string;
}

interface Action {
  type: string;
  payload?: string;
}

export type {
  State,
  Action
}

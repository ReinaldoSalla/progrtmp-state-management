interface State {
  products: Array<any>;
  productsToRender: Array<any>;
  productsInCart: Array<string>;
  currentFilter: string;
  isCartVisible: boolean;
}

interface Action {
  type: string;
  payload?: string;
}

export type {
  State,
  Action
}

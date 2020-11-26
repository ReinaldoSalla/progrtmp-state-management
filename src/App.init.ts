const initialState = {
  products: []
};

const init = (initialProducts: any) => {
  return { products: initialProducts }
};

export { initialState, init }
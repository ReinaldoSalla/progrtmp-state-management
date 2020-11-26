const addProduct = (state: any, payload: any): any => {
  console.log(state);
  return {
    ...state
  }
}

// const addProduct = (state: any, payload: any): any => ({
//   ...state,
//   products: [...state.products, payload]
// });

export { addProduct };
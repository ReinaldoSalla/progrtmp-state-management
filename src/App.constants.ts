const CONSTANTS = {
  ADD_PRODUCT: 'ADD_PRODUCT' as const,
  PRODUCTS: new Array(12).fill(0).map((_, index) => (
    {
      name: `product #${index + 1}`,
      description: 'product description',
      price: `$${1e6}`
    }
  ))
};

export default CONSTANTS;
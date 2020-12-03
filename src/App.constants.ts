const CONSTANTS = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART' as const,
  LOAD_PRODUCTS_FROM_API: 'LOAD_PRODUCTS_FROM_API' as const,
  PRODUCTS: new Array(12).fill(0).map((_, index) => (
    {
      name: `product #${index + 1}`,
      description: 'product description',
      price: `$${1e6}`
    }
  ))
};

export default CONSTANTS;
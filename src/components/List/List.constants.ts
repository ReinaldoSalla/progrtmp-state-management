const productsInCart = new Array(12).fill(0).map((_) => (
  {
    name: 'product name',
    description: 'product description',
    price: `$${1e6}`
  }
))

export default productsInCart;
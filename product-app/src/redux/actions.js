export function fetch_products(products) {
  return {
    type: "FETCH_PRODUCTS",
    payload: products,
  };
}

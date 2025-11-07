const cartTotal = (cart) => {
  if (!cart.length) {
    return 0;
  }
  const cartTotal = cart.reduce((totalPrice, eachItem) => {
    return totalPrice + eachItem.price * eachItem.quantity;
  }, 0);
  return cartTotal;
};
export default cartTotal;

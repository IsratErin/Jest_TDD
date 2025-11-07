import cartTotal from "./cartTotal";

test(`return 0 for an empty array`, () => {
  const cart = [];
  expect(cartTotal(cart)).toBe(0);
});

test(`sum the price of single item`, () => {
  const cart = [{ price: 10, quantity: 1 }];
  expect(cartTotal(cart)).toBe(cart[0].price);
  expect(cartTotal(cart)).toBe(10);
});

test(`sum the price of the all items`, () => {
  const cart = [
    { price: 5, quantity: 2 },
    { price: 10, quantity: 1 },
    { price: 50, quantity: 1 },
  ];
  expect(cartTotal(cart)).toBe(70);
});

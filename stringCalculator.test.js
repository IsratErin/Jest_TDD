import stringCalculator from "./stringCalculator";

test(`return 0 for empty string`, () => {
  expect(stringCalculator("")).toBe(0);
});

test(`return number for single number string`, () => {
  expect(stringCalculator("5")).toBe(5);
});

// should return the sum of two numbers separated by a comma (e.g., "1,2" should return 3).
test(`return sum of two numbers separated by comma`, () => {
  expect(stringCalculator("1,2,5")).toBe(8);
});

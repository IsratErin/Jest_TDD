import passwordValidator from "./passwordValidator.js";

test(`if password is less than 8 character return false`, () => {
  const password = "myPass";
  const correctPassword = "myPassword1";
  expect(passwordValidator(password)).toBe(false);
  expect(passwordValidator(correctPassword)).toBe(true);
});

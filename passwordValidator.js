const passwordValidator = (password) => {
  const length = password.length;
  if (/\d/.test(password) && length > 8) {
    return true;
  }
  return false;
};
export default passwordValidator;

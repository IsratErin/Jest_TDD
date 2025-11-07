const stringCalculator = (str) => {
  if (str === "") return 0;

  const numbers = str.split(",").map((numStr) => Number(numStr));
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
export default stringCalculator;

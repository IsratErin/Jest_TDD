import arrayUniquer from "./arrayUniquer";

test(`return original array if contains no duplicates`, () => {
  const arr = [1, 2, 3, 4, 5];
  expect(arrayUniquer(arr)).toEqual(arr);
});

//[1, 1, 2, 3, 2] should return [1, 2, 3]).
test(`remove duplicates from array`, () => {
  const arr = [1, 1, 2, 3, 2];
  expect(arrayUniquer(arr)).toEqual([1, 2, 3]);
});

//handle and remove multiple sequential duplicates (e.g., [5, 5, 5])
test(`remove multiple sequential duplicates from array`, () => {
  const arr = [5, 5, 5, 1, 2, 2, 3];
  expect(arrayUniquer(arr)).toEqual([5, 1, 2, 3]);
});

test(`handle empty array`, () => {
  const arr = [];
  expect(arrayUniquer(arr)).toEqual([]);
});

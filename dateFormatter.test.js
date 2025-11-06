import dateFormatter from "./dateFormatter.js";

//It should correctly format a given Date object (e.g., new Date('2025-11-06')) to 11/06/2025.

test(`date as object formats as a simple string`, () => {
  const dateObject = new Date("2025-11-06");
  expect(dateFormatter(null)).toBe("");
  expect(dateFormatter(undefined)).toBe("");
  expect(dateFormatter(dateObject)).toBe(`11/06/2025`);
});
test(`date as string formats as a simple string`, () => {
  const dateString = "2025-11-06";
  const dateString2 = "2025-10-12";
  expect(dateFormatter(dateString)).toBe(`11/06/2025`);
  expect(dateFormatter(dateString2)).toBe(`10/12/2025`);
});

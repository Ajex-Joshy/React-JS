import { sum } from "../sum.js";

test("sum function should calculate sum of two numbers", () => {
  const result = sum(10, 5);

  expect(result).toBe(15);
});

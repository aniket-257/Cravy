import Sum from "../Sum";

test("Sum function adds two numbers correctly", () => {
  const result = Sum(2, 3);
  expect(result).toBe(5);
});

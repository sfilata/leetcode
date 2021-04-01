// const searchMatrix = require("./searchMatrix");
// import searchMatrix from "./searchMatrix";
// import { twoSum } from "./typescript";
import { clumsy } from "./clumsy";

// test("searchMatrix Test", () => {
//   expect(
//     searchMatrix(
//       [
//         [1, 3, 5, 7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 60],
//       ],
//       3
//     )
//   ).toBe(true);
//   expect(
//     searchMatrix(
//       [
//         [1, 3, 5, 7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 60],
//       ],
//       13
//     )
//   ).toBe(false);
// });

// test("twoSum", () => {
//   expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
//   expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
//   expect(twoSum([3, 3], 6)).toEqual([0, 1]);
// });

test("clumsy", () => {
  expect(clumsy(4)).toBe(7);
  expect(clumsy(10)).toBe(12);
});

// const searchMatrix = require("./searchMatrix");
import searchMatrix from "./searchMatrix";

test("searchMatrix Test", () => {
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    )
  ).toBe(true);
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13
    )
  ).toBe(false);
});

function trap(height: number[]): number {
  const reverseArr: any = [];
  const normalArr: any = [];
  for (let i = 0, j = height.length - 1; j >= 0; i++, j--) {
    if (!i) {
      normalArr.push(height[i]);
      reverseArr.unshift(height[j]);
    } else {
      normalArr.push(
        height[i] > normalArr[i - 1] ? height[i] : normalArr[i - 1]
      );
      reverseArr.unshift(height[j] > reverseArr[0] ? height[j] : reverseArr[0]);
    }
  }
  let sum = 0;
  height.forEach((item, index) => {
    const value =
      normalArr[index] <= reverseArr[index]
        ? normalArr[index]
        : reverseArr[index];
    sum += value - item;
  });
  return sum;
}

console.log(trap([4, 2, 3]));
// [0,1,1,2,2,2,2,3,3,3,3,3], [3,3,3,3,3,3,3,3,2,2,2,1]
// export { trap };

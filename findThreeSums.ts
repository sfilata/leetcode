function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  if (len < 3) return [];
  if (len === 3)
    return nums.reduce((acc, cur) => acc + cur, 0) === 0 ? [nums] : [];
  const results: any[] = [];
  const data = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    const newArr = nums.slice(i + 1);
    const result = twoSum(newArr, -nums[i]).map((item) => [nums[i], ...item]);
    result.forEach((item) => {
      const flag = [...item].sort().join();
      if (!data.has(flag)) {
        results.push(item);
        data.add(flag);
      }
    });
  }
  return results;
}

function twoSum(nums: number[], target: number): number[][] {
  const result: any[] = [];
  const arr = [...nums].sort((a, b) => a - b);
  for (let p1 = 0, p2 = nums.length - 1; p1 < p2; ) {
    let sum = arr[p1] + arr[p2];
    if (sum < target) {
      p1++;
    } else if (sum > target) {
      p2--;
    } else {
      result.push([arr[p1], arr[p2]]);
      p1++;
    }
  }
  return result;
}

function findAllIndex(nums: number[], target: number): number[] {
  return nums.filter((item) => item === target);
}

// console.log(twoSum([1, 2, 3, 4, 1, 2], 4));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

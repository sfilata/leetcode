/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!m) {
    nums2.forEach((item, index) => {
      nums1[index] = nums2[index];
    });
    return;
  }
  if (!n) {
    return;
  }
  const len = m + n;
  for (let p = len - 1, p1 = m - 1, p2 = n - 1; p1 >= 0 && p2 >= 0; ) {
    if (nums2[p2] > nums1[p1]) {
      nums1[p] = nums2[p2];
      nums2[p2] = 0;
      p2--;
    } else {
      nums1[p] = nums1[p1];
      nums1[p1] = 0;
      p1--;
    }
    p--;
  }
  nums2.forEach((item, index) => {
    nums1[index] = item ? item : nums1[index];
  });
}

merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);

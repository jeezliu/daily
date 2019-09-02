const findMedianSortedArrays = require('./4.median-of-two-sorted-arrays');

test('findMedianSortedArrays', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  expect(findMedianSortedArrays([1, 3], [2, 1])).toBe(1.5);
  expect(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8])).toBe(5);
  expect(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toBe(5.5);
});
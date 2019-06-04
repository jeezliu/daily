/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var len = nums1.length + nums2.length;
  var k = Math.floor(len / 2);
  if(len % 2 === 1) return kth(nums1, nums2, k);
  return (kth(nums1, nums2, k) + kth(nums1, nums2, k - 1)) / 2;    
};

function kth(nums1, nums2, k) {
  if(nums1.length === 0) return nums2[k];
  if(nums2.length === 0) return nums1[k];
  [idx1, idx2] = [Math.floor(nums1.length / 2), Math.floor(nums2.length / 2)];
  [md1, md2] = [nums1[idx1], nums2[idx2]];
  if(idx1 + idx2 < k) {
    if(md1 < md2) return kth(nums1.slice(idx1 + 1), nums2, k - idx1 - 1 );
    return kth(nums1, nums2.slice(idx2 + 1), k - idx2 - 1);
  } else {
    if(md1 > md2) return kth(nums1.slice(0, idx1), nums2, k);
    return kth(nums1, nums2.slice(0, idx2), k); 
  }
}
module.exports = findMedianSortedArrays;
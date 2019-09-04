/*
 * @lc app=leetcode id=41 lang=java
 *
 * [41] First Missing Positive
 */
class Solution {
    public int firstMissingPositive(int[] nums) {
        int i = 0;
        while(i < nums.length) {
            if(nums[i] <= 0 || nums[i] > nums.length || (nums[i] == i + 1)) i++;
            else if(nums[i] != nums[nums[i]-1]) {
                int target = nums[i] - 1;
                int temp = nums[i];
                nums[i] = nums[target];
                nums[target] = temp;
            } else i++;
        }
        i = 0;
        while (i < nums.length && nums[i] == i + 1) i++;
        return i + 1;
    }
}


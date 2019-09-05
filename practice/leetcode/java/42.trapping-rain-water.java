/*
 * @lc app=leetcode id=42 lang=java
 *
 * [42] Trapping Rain Water
 */
class Solution {
    public int trap(int[] height) {
        return trapInSection(height, 0, height.length - 1);
    }
    private int trapInSection(int[] height, int begin, int end) {
        if(begin >= end - 1) return 0;
        int higherMax = height[begin], lowerMax = height[end];
        int index1 = begin, index2 = end;
        if(height[begin] < height[end]) {
            higherMax = height[end];
            lowerMax = height[begin];
            index1 = end;
            index2 = begin;
        }
        
        for(int i = begin + 1; i < end; i++) {
            if(height[i] > higherMax) {
                lowerMax = higherMax;
                index2 = index1;
                higherMax = height[i];
                index1 = i;
            } else if (height[i] > lowerMax) {
                lowerMax = height[i];
                index2 = i;
            }
        }
        if(index1 > index2) {
            int temp = index1;
            index1 = index2;
            index2 = temp;
        }
        int sectionAcc = 0;
        for(int i = index1 + 1; i < index2; i++) {
            sectionAcc += (lowerMax - height[i]);
        }
        return trapInSection(height, begin, index1) + sectionAcc + trapInSection(height, index2, end);
    }
}


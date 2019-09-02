/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0;
  let left = -1;
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        left = i;
      } else {
        stack.pop();
        
        let matchIndex = stack[stack.length - 1] === undefined ? left : stack[stack.length - 1];
        
        let interval = i - matchIndex;
        max = max < interval ? interval : max;
      }
    }
  }
  return max;
};


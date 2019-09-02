/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

  if (words.length === 0) return [];
  
  const wordsMap = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  const len = words[0].length;
  const num = words.length;
  const result = [];

  for(let i = 0; i <= s.length - len * num; i++) {
    const realMap = {};
    let counts = num;
    for(let j = i; j < s.length; j += len) {
      const sub = s.substr(j, len);
      // const sub = s.substring(j, j + len);
      realMap[sub] = (realMap[sub] || 0) + 1;
      if (realMap[sub] > (wordsMap[sub] || 0)) {
        break;
      } else {
        counts--;
        if (counts === 0) {
          result.push(i);
          break;
        }
      }
    }
  }

  return result;
};


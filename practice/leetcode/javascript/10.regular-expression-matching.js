/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(!s && !p) return  true;
    if(p[1] === '*') {
        return isMatch(s, p.slice(2)) || (matchOne(s, p) && isMatch(s.slice(1), p));
    } else if(matchOne(s, p)) {
        return  isMatch(s.slice(1), p.slice(1));
    } else {
        return false;
    }
};

function matchOne(s, p) {
    if(s[0] && p[0] === '.') return true;
    return s[0] === p[0];
}

module.exports = isMatch;
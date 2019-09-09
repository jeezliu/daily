/*
 * @lc app=leetcode id=44 lang=java
 *
 * [44] Wildcard Matching
 */
class Solution {
    // 笨重方法
    public boolean isMatch(String s, String p) {
        boolean[][] match = new boolean[s.length()][p.length()];
        return matchByIndex(s, 0, p, 0, match);
    }
    private boolean matchByIndex(String s, int i, String p, int j, boolean[][] match) {
        if(i >= s.length() && j >= p.length()) return true;
        if(i >= s.length()) {
            while (j < p.length()) if(p.charAt(j++) != '*') return false;
            return true;
        }
        if(j >= p.length()) return false;
        if(match[i][j]) {
            return matchByIndex(s, i + 1, p, j + 1, match);
        } else {
            if(p.charAt(j) == '?') {
                match[i][j] = true;
                return matchByIndex(s, i + 1, p, j + 1, match);
            } else if (p.charAt(j) == '*') {
                match[i][j] = true;
                return matchByIndex(s, i + 1, p, j, match) || matchByIndex(s, i, p, j + 1, match);
            } else if (p.charAt(j) == s.charAt(i)) {
                match[i][j] = true;
                return matchByIndex(s, i + 1, p, j + 1, match);
            }
            return false;
        }
    }
}


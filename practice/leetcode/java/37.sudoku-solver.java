/*
 * @lc app=leetcode id=37 lang=java
 *
 * [37] Sudoku Solver
 */

class Solution {
    public void solveSudoku(char[][] board) {
        fillRecursively(board);
    }
    public boolean fillRecursively(char[][] board) {
        int[] coordinate = getFirstBlankPlace(board);
        if (coordinate == null) return true;
        else {
            char[] validNums = getAllValidNums(board, coordinate[0], coordinate[1]);
            if(validNums != null) {
                for(int i = 0; i < validNums.length; i++) {
                    board[coordinate[0]][coordinate[1]] = validNums[i];
                    if(fillRecursively(board)) {
                        return true;
                    }
                }
                board[coordinate[0]][coordinate[1]] = '.';
            }
            return false;
        }
    }
    public char[] getAllValidNums(char[][] board, int i, int j) {
        char[] cs = {'1', '2', '3', '4', '5', '6', '7', '8', '9'};
        for(int k = 0; k < 9; k++) {
            char c = board[i][k];
            if (c != '.') cs[c-'1'] = 0;
            c = board[k][j];
            if (c != '.') cs[c-'1'] = 0;
        }
        int areaI = i / 3;
        int areaJ = j / 3;
        for (int m = 0; m < 3; m++)
            for(int n = 0; n < 3; n++) {
                int indexI = areaI * 3 + m;
                int indexJ = areaJ * 3 + n;
                char c = board[indexI][indexJ];
                if (c != '.') cs[c-'1'] = 0;
            }
        int num = 0;
        for(int k = 0; k < 9; k++) {
            if(cs[k] != 0) cs[num++] = cs[k];
        }
        if (num == 0) return  null;
        char[] res = new char[num];
        for(int k = 0; k < num; k++) {
            res[k] = cs[k];
        }
        return res;
    }
    public int[] getFirstBlankPlace(char[][] board) {

        for(int i = 0; i < 9; i++)
            for(int j = 0; j < 9; j++)
                if(board[i][j] == '.') return new int[]{i, j};
        return null;
    }
}

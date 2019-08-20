/**
 * 有效的数独
 * https://leetcode-cn.com/problems/valid-sudoku/solution/you-xiao-de-shu-du-by-leetcode/
  */
var isValidSudoku = function(board) {
  let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let columns = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let box = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  for(let r = 0; r < 9; r++) {
    for(let c = 0; c < 9; c++) {
      const current = board[r][c]
      if(current !== '.'){
        const k = ~~(c/3) + 3*(~~(r/3))
        if(rows[r][current] || columns[c][current] || box[k][current]){
          return false
        }
        rows[r][current] = true
        columns[c][current] = true
        box[k][current] = true
      }
      
    }
  }
  return true
};

isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])
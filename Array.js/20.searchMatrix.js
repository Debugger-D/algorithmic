/**1
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。
  */

  /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false
  const col = matrix[0].length;
  const row = matrix.length;
  let i = row -1;
  let j = 0
  while(i >= 0 && j < col) {
    let val = matrix[i][j]
    if(val > target) {
      i--
    } else if (val < target) {
      j++
    } else {
      return true
    }
  }
  return false
};

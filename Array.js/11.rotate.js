/**
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度
  */

var rotate = function(matrix) {
  const len = matrix.length;
  for(let i = 0; i < len; i++) {
    for(let j = i; j < len; j++) {
      const center = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = center
    }
  }
  console.log(matrix)
  for(let i = 0; i < len; i++) {
    matrix[i] = matrix[i].reverse()
  }
};

rotate([[1,2,3],[4,5,6],[7,8,9]])
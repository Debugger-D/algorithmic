/**1
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
  */


var generate = function(numRows) {
  let arr = []
  if(numRows === 0) return arr
  arr.push([1])
  if(numRows === 1) return arr
  arr.push([1,1])
  if(numRows === 2) return arr
  let currentArr = [1];
  let index = 3
  while(numRows >= index) {
    const preArr = arr[index-2]
    for(let i = 1; i<index-1; i++) {
      currentArr[i] = preArr[i-1] + preArr[i]
    }
    currentArr.push(1)
    arr.push(currentArr)
    currentArr = [1]
    index++
  }
  return arr
};

generate(5)

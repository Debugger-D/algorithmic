/**1
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
  */

  /**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  const str = n.toString(2);
  for(let i = 0; i < str.length; i++) {
      if(str[i] === '1') count++
  }
  return count
  
};

var hammingWeight = function(n) {
  let count = 0;
  while(n) {
    n = n&(n-1)
    count++
  }
  return count
  
};
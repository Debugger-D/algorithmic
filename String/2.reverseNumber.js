/**给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 输入: 123  输出: 321
 * 
 * 输入: -123  输出: -321
 * 
 * 输入: 120  输出: 21
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
  */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x === 0) return 0
  let abs
  if(x > 0) {
      abs = true
  }
  x = +String(Math.abs(x)).split('').reverse().join('')
  if(x >= 2 ** 31 -1 ) return 0
  if (!abs) {
      return -x
  } 
  return x
};
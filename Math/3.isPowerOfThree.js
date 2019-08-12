/**1
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
  */

  /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if(n===1) return true
  function math (n) {
      if(n === 3) return true
      if(n/3 < 3) return false
      if(n/3 !== parseInt(n/3)) return false
      return math(n/3)
  }
  return math(n)
};
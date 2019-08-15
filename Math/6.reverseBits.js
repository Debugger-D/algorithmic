/**1
 * 颠倒给定的 32 位无符号整数的二进制位。
 *  
 * 
 * 输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let er = n.toString(2)
  let fin = ''
  for(let i = er.length-1; i >= 0; i--) {
    fin += er[i]
  }
  while(fin.length < 32) {
    fin = fin += 0
  }
  return parseInt(fin, 2)
};
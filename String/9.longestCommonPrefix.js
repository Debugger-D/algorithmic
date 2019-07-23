/**3
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
  */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ''
  if(strs.length === 1) return strs[0]
  let com = '';
  let count = 0;
  let fisrtLen = strs[0].length
  if(fisrtLen === 0) return ''
  for(let k=0;k<fisrtLen;k++){
    for(let i=1;i<strs.length;i++){
      if (strs[i].length === 0) return ''
      
      if(strs[i][count] !== strs[0][count]) {
        return com
      }
    }
    com += strs[0][count]
    count++
  }
  return strs[0]
};
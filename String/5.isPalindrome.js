/** 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const len = s.length;
  const reg = /[0-9a-z]/i;
  let str = ''
  for(let i = 0; i < len; i++){
      if(reg.test(s[i])) str += s[i]
  }
  str = str.toLocaleUpperCase();
  const cen = Math.ceil(str.length/2);
  for(let i = 0; i < cen; i++) {
      if(str[i] !== str[str.length - 1 - i]) return false
  }
  return true
};

isPalindrome("race a car")

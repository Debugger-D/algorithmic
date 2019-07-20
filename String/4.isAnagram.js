/**给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
  */

  /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sl = s.length;
  const tl = t.length;
  if (sl !== tl) return false;
  
  let hash = {};
  for (let i = 0; i< sl; i++) {
      hash[s[i]] = ++hash[s[i]] || 1;
  }
  for (let i = 0; i< tl; i++) {
      if(!hash[t[i]]) return false
      hash[t[i]] = --hash[t[i]];
  }
  return true
};
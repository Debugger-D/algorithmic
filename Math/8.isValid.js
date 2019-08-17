/**1
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
  */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let hash = {
    '{': 1,
    '}': -1,
    '[': 2,
    ']': -2,
    '(': 3,
    ')': -3
  }
  s = s.split('')
  const arr = []
  while (s.length) {
    const current = s.splice(0, 1)[0]
    if (hash[current] > 0) {
      arr.push(current)
    } else {
      if (hash[current] + hash[arr[arr.length - 1]] === 0) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  if (arr.length) return false
  return true
};
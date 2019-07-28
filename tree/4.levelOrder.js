/**3
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
  */

  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  let index = 0;
  if(root === null) return []
  res[index] = [root.val]
  function recursion(left, right, index) {
    ++index
    if (left !== null) {
      if (res[index]) {
        res[index].push(left.val)
      }else {
        res[index] = [left.val]
      }
      recursion(left.left, left.right, index)
    }
    if (right !== null) {
      if (res[index]) {
        res[index].push(right.val)
      }else {
        res[index] = [right.val]
      }
      recursion(right.left, right.right, index)
    }
  }
  recursion(root.left, root.right, index)
  return res
};
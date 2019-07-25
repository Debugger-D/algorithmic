/**
 * 给定一个二叉树，找出其最大深度
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(root === null) return 0;
  let leftLength = maxDepth(root.left);
  let rightLength = maxDepth(root.right);
  let len = leftLength > rightLength ? leftLength : rightLength;
  return len + 1
};
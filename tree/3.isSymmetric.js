/**
 * 
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) return true
  function a (left, right){
    if(left === null && right === null){
      return true
    }
    if(left === null || right === null){
      return false
    }
    if(left.val !== right.val) {
        return false
    }
    return a(left.left, right.right) && a(left.right, right.left)
  }
  return a(root.left, root.right)
};
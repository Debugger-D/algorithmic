/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 * @param {number[]} nums
 * @return {number}
 */

// 利用异或操作符
const singleNumber = function(nums) {
  for(let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i]
  }
return nums[0]
};
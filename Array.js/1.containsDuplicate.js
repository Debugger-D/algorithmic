// 给定一个整数数组，判断是否存在重复元素。
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

/**
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
  */

// 执行用时 :2552 ms  内存消耗 :36.9 MB
const containsDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(nums.indexOf(nums[i]) !== i) return true
  }
  return false
};

// 执行用时 :80 ms  内存消耗 :40.2 MB
const  containsDuplicate1 = function(nums) {
  return new Set(nums).size != nums.length
};

// 执行用时 :84 ms  内存消耗 :42.4 MB
var containsDuplicate2 = function(nums) {
  let pool = {}
  for(let i = 0; i < nums.length; i++) {
    if (!pool[nums[i]]) {
      pool[nums[i]] = true
    } else {return true}
  }
  return false
};

// 执行用时 :92 ms  内存消耗 :41.9 MB
var containsDuplicate3 = function(nums) {
  let pool = new Map()
  for(let i = 0; i < nums.length; i++) {
    if (!pool.has(nums[i])) {
      pool.set(nums[i], 1)
    } else {return true}
  }
  return false
};
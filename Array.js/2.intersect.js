/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 * 
  */

var intersect = function(nums1, nums2) {
  let short,long,fin=[];
  
  if(nums1.length>nums2.length){
    short = nums2;
    long = nums1
  } else{
    short = nums1;
    long = nums2;
  }
  while(short.length){
    const index = long.findIndex(v => (v === short[0] ))
    const first = short.shift() 
    if(index !== -1){
      fin.push(first)
      long.splice(index,1)
    }
  }
  return fin
};
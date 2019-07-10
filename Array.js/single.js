const singleNumber = function(nums) {
  for(let i=1;i<nums.length;i++) {
      nums[0] ^= nums[i];
      console.log(nums)
  }
  return nums[0];
};

console.log(singleNumber([2,2,1,3,5,4,3,1,4]))
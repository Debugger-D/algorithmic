/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  if (n <= 2 ) {
    return count;
  }
  count++
   if (n === 3) {
    return count;
  }
  count++
  for(let i = 4; i<n; i++){
    const sqrt = Math.sqrt(i);
    if (sqrt !== parseInt(sqrt)) {
      let is = true
      for(let j = 2; j< sqrt; j++){
        if (i % j === 0) {
          is = false
          break;
        }
      }
      if(is) count++
    }
  }
  return count
};
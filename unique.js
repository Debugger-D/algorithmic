const arr = [1,1,2,3,3,5,2]

// es6 new Set()
function unique1(arr = []) {
  if (!(arr instanceof Array)) {
    throw new Error('参数要求为数组类型')
  }
  const result = Array.from(new Set(arr))
  return result
}

// console.log(unique1(arr))

// hash
function unique2(arr = []) {
  if (!(arr instanceof Array)) {
    throw new Error('参数要求为数组类型')
  }
  let hashObj = {}
  let arrPool = []
  arr.forEach((val) => {
    if (!hashObj[val]) {
      hashObj[val] = true
      arrPool.push(val)
    }
  })
  return arrPool
}
console.log(unique2(arr))

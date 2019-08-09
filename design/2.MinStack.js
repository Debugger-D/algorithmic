/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const len = this.arr.length
    this.arr[len] = x
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const len = this.arr.length
    this.arr.splice([len-1],1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.arr.length
    return this.arr[len-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.arr[0];
    const len = this.arr.length;
    if(len===1) return min
    for(let i = 1; i<len; i++) {
        min = Math.min(min, this.arr[i])
    }
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

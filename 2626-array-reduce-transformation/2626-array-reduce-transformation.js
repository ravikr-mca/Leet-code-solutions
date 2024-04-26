/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
     let sum = init;

    for (let index = 0; index < nums.length; index++) {

        sum = fn(sum, nums[index])

    }
    return sum 
};
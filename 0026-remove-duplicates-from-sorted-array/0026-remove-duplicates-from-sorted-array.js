/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let count = 0;

    for (let index = 0; index < nums.length; index++) {

        if (index < nums.length - 1 && nums[index] === nums[index + 1]) {

            continue;
            

        } else {
            nums[count] = nums[index]
            count++
        }

    }
    console.log(nums)
    return count
};

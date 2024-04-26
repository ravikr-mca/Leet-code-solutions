/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let copyOfOriginal = x; // copy originl number
    let reverseNumber = 0; // assign reverse number with 0

    while (copyOfOriginal > 0) { // loop till this copyOfOriginal grater than 0

        let digit = copyOfOriginal % 10; // take out last digit
        reverseNumber = reverseNumber * 10 + digit; // place last digit to first place
        copyOfOriginal = ~~(copyOfOriginal / 10)
        }
    return reverseNumber === x;

};
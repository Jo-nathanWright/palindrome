/**
 * Checks Given Strings to see if they are Palindromes
 * @param {*} str 
 */
function isPalindrome(str) {
    let lowercaseStr = str.toLowerCase() // Makes the word inserted be lowercase
    let reversed = lowercaseStr.split("").reverse().join(""); //The process of reverseing the string by spliting the letters apart, reversing it, and then putting the letters back together

    //Asks if reversed is the same word as the initial str provided
    if (lowercaseStr == reversed) {
        console.log("It's a Palindrome!") //The word was the same
    } else {
        console.log("It's not a Palindrome") //The word was not the same
    }
}

isPalindrome("RaceCar"); //Sets up the Palindrome
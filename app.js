function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    let lowercaseStr = str.toLowerCase()
    let lowercaseRev = reversed.toLowerCase()

    if (lowercaseStr == lowercaseRev) {
        console.log("Is a Palindrome!")
    } else {
        console.log("That is not a Palindrome")
    }
}

isPalindrome("BOB");
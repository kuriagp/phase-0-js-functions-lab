


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// 1. Calculate Tax Function
function calculateTax(amount) {
    return amount * 0.10;
}

// 2. Convert To Upper Case Function
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// 3. Find Largest Number Function
function findMaximum(num1, num2) {
    if (num1 > num2) return num1;
    return num2;
}

// 4. Check Palindrome Word  Function
function isPalindrome(word) {
    // Criteria states: "ignoring case"
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord; // Returns a boolean (true/false)
}

// 5. Calculate Discounted Price Function
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}

//Function Calls Tests

console.log(calculateTax(200));

console.log(convertToUpperCase("Ronny"));

console.log(findMaximum(8, 50));

console.log(isPalindrome("racecar"));

console.log(calculateDiscountedPrice(4500, 0.1));










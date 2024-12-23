/*
Chaining Rule:
    The chaining rule in JavaScript refers to the ability to call multiple methods on an object or value in a single statement. It allows you to "chain" method calls one after the other, improving code readability and efficiency. The key is that each method in the chain must return an object or value that can invoke the next method in the chain.
*/

// 1: Chaining on String 

let str = "      I love java Script     "

let result = str.trim().toUpperCase().split(" ")
// console.log(result)

/*
Explanation:
    1. str.trim() removes whitespace from both ends of the string.
    2. .toUpperCase() converts the trimmed string to uppercase.
    3. .split(" ") splits the string into an array of words using a space as the delimiter.
*/




// 2: Chaining on array

const nums = [5, 10, 15, 20]

const numsResult = nums.filter((num) => num > 10) // filters numbers greater than 10: [15, 20].
                    .map((num) => num * 2) // multiplies each number by 2: [30, 40].
                    .sort((a, b) => b - a) //  sorts the numbers in descending order: [40, 30].

console.log(numsResult)
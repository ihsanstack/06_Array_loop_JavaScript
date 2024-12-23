/*
Map():
    The map method is an array method in JavaScript used to create a new array by applying a callback function to each element of the original array. The original array remains unchanged.

    The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
Key Features of map
    1. Returns a new array.
    2. Does not mutate the original array.
    3. Applies a callback function to each element in the array.
    4.The length of the new array is the same as the original array.


Syntax:

array.map((currentValue, index, array) => {
    Your logic here
});
    currentValue => The current element being processed.
    index (optional) => The index of the current element.
    array (optional) => The original array.



How Does map Work?
    1. Iterates through each element in the array.
    2. Applies the provided callback function to each element.
    3. Collects the return value of the callback into a new array.
    4. Returns the new array.
*/

const maping = new Map()
maping.set('IN', "India")
maping.set('AFG', "Afghanistan")
maping.set('USA', "United State of America")

// console.log(map)

for (const [key, value] of maping) {
    // console.log(`${key}: ${value}`)
}



// Iterating Over a Map

// Create a new Map object with key-value pairs
const map1 = new Map([
    ['name', "Ihsan"],  // Key: 'name', Value: "Ihsan"
    ['email', "ihsan@google.com"]  // Key: 'email', Value: "ihsan@google.com"
]);

// Iterate over the entries of the Map using a for-of loop
for (const [key, value] of map1) {  
    // Destructure the key and value from each Map entry
    // console.log(key, value);  // Print the key and value to the console
}

// Output:
// name Ihsan
// email ihsan@google.com



const numbers = [2, 4, 6, 8, 10]
const doubleNumber = numbers.map((num) => {
    return num * 2
})
// console.log(doubleNumber)




// Use forEach method to add number and return
const addNums = []

numbers.forEach((num) => {
    addNums.push(num + 10)
})

console.log(addNums)



// Extracting Properties from Objects

const users = [
    { name: "Ihsan", age: 18 },
    { name: "Imran", age: 25 },
    { name: "Ali", age: 22 },
]

// Apply map
const userNames = users.map((user) => {
    return user.name; // Extract the "name" property
})

// console.log(userNames) // ["Ihsan", "Imran", "Ali"]




// Using Index in map

let number = [10, 20, 30, 40, 50]

let withIndex = number.map((num, index) => {
    return `Index ${index}: ${num}`
})

// console.log(withIndex)




// Common Mistakes
// Forgetting to return a value inside the callback function:

const result = [1, 2, 3].map((num) => {
    num * 2; // No return, so the new array will contain `undefined`
});

// console.log(result); // [undefined, undefined, undefined]


// Fix:
const result1 = [1, 2, 3].map((num) => {
    return num * 2; // Explicitly return the value
});
// console.log(result1)





const myMap = new Map(); // Create a new Map to store key-value pairs

// Define different types of keys
const keyStr = "a string"; // A string key
const keyObj = {};         // An object key
const keyFun = function() {}; // A function key

// Setting values in the Map using different keys
myMap.set(keyStr, "Value associated with a string"); // Map the string key to a value
myMap.set(keyObj, "Value associated with a object"); // Map the object key to a value
myMap.set(keyFun, "Value associated with a function"); // Map the function key to a value

console.log(myMap.size); // 3
// Logs the size of the Map, which is 3, since we added three unique keys

// Retrieving values from the Map using the keys
console.log(myMap.get(keyStr)); // "Value associated with a string"
// Access and log the value associated with the string key

console.log(myMap.get(keyObj)); // "Value associated with a object"
// Access and log the value associated with the object key

console.log(myMap.get(keyFun)); // "Value associated with a function"
// Access and log the value associated with the function key




/*
Conclusion:
    The map method is a powerful tool for transforming arrays in JavaScript. It allows you to create a new array by applying logic to each element of the original array, making it ideal for data manipulation and extraction.
*/
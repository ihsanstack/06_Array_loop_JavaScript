/*
filter():
    The filter() method in JavaScript is used to create a new array containing all the elements of an existing array that pass a certain test defined in a callback function. It does not mutate the original array.

Syntax:
    array.filter(callback(element[, index[, array]])[, thisArg])

    1. callback: A function that is called for each element of the array.
        element: The current element being processed.
        index (optional): The index of the current element.
        array (optional): The array being processed.
    2. thisArg (optional): Value to use as this when executing the callback.

Key Points:
    The filter() method returns a new array.
    If no elements pass the test, it returns an empty array.
    The original array remains unchanged.    
*/


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = nums.filter((num) => num > 4) // implicite return :- way no need to return
const evenNums = nums.filter(item => item % 2 === 0)
const oddNums = nums.filter((value) => { // explicite return :- essential to return
    return value % 2 != 0
})

// console.log(newNums)
// console.log(evenNums)
// console.log(oddNums)



// use forEach() for same output

const anotherNum = []

nums.forEach((item) => {
    if(item > 4) {
        anotherNum.push(item)
    }
})

// console.log(anotherNum)




// Filter Words Longer Than 5 Characters

const words = ['Ihsan Ullah', 'Zabih', 'Usama', 'Rashid']
const longWords = words.filter((char) => char.length > 5)

console.log(longWords)




// Filter Objects by Property

const users = [
    { name: "Ihsan", age: 18 },
    { name: "Aisha", age: 22 },
    { name: "Ali", age: 15 },
    { name: "Sara", age: 20 }
];

// Filter users who are 18 or older
const adults = users.filter(user => user.age >= 18);

console.log(adults);
// Output: 
// [ 
//   { name: "Ihsan", age: 18 }, 
//   { name: "Aisha", age: 22 }, 
//   { name: "Sara", age: 20 } 
// ]




// Real-World Use Case: Filtering Search Results

const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headphones", price: 100 }
];

// Filter products with price > 500
const expensiveProducts = products.filter(product => product.price > 500);

console.log(expensiveProducts);
// Output:
// [
//   { id: 1, name: "Laptop", price: 800 },
//   { id: 2, name: "Phone", price: 600 }
// ]



/*
Conclusion
    The filter() method is a powerful tool for processing arrays when you need to create a new array based on specific conditions. It is especially useful for handling large datasets, filtering objects, or implementing search and filtering functionality in web applications       
*/
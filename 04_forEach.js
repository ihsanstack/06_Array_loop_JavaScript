/*
forEach()
    The forEach() method is an array method in JavaScript used to iterate over array elements. It executes a provided callback function once for each array element in ascending order, but it does not return a new array (unlike map()).


Key Features of forEach()
    1. Executes a provided function for each element in the array.
    2. Does not return a new array (returns undefined).
    3. Is not chainable (you cannot chain additional methods to forEach()).
    4. Operates directly on the array elements without modifying the original array unless you explicitly do so.    


Syntax:
    array.forEach(callback(currentValue, index, array), thisArg);

Parameters
    1. callback: A function that gets executed for each element in the array. It takes the following arguments:
        currentValue: The current element being processed.
        index (optional): The index of the current element.
        array (optional): The array forEach() was called upon.
    2. thisArg (optional): Value to use as this when executing the callback function.    
*/




// 1: Basic Usage

const lang = ['JavaScript', 'Python', 'Java', 'Cpp']
// Define an array 'lang' with programming language names as elements.

// Apply forEach() loop
lang.forEach((value) => {
    // console.log(value)
})


function printLang(printValue) {
    console.log(printValue)
}

// lang.forEach(printLang)





const value = lang.forEach((item) => { 
    // Use the `forEach` method to iterate over each element in the 'lang' array.
    return item; 
    // The `return` statement inside the callback function does not affect the `forEach` method, 
    // because `forEach` does not collect or return any value.
});

// console.log(value); // undefined
// Logs `undefined` because the `forEach` method always returns `undefined`.




// 2: Accessing Index 

const frouts = ['Apple', 'Mango', 'Orange', 'Cherry']; 
// Define an array of fruits named 'frouts' with four elements: Apple, Mango, Orange, and Cherry.

frouts.forEach((frout, index) => { 
    // Use the `forEach` method to iterate over each element in the 'frouts' array.
    // The callback function takes two parameters:
    // - `frout`: The current element (fruit) being iterated over.
    // - `index`: The index of the current element in the array.
    
    // console.log(`Index: ${index}, Value: ${frout}`); 
    // Log the index and value of each element in the format "Index: X, Value: Y".
});

// Output:
// Index: 0, Value: Apple
// Index: 1, Value: Mango
// Index: 2, Value: Orange
// Index: 3, Value: Cherry





// 3: Modifying the Array

const numbers = [1, 2, 3, 4]

numbers.forEach((num, index, arr) => {
    arr[index] = num * 2
})

// console.log(numbers) // Output: [2, 4, 6, 8]





const students = [
    {name: 'Ihsan', id: 2342, semister: '2nd', university: 'UOH'},
    {name: 'Usama', id: 9698, semister: '7th', university: 'UOH'},
    {name: 'Zabih', id: 3458, semister: '5th', university: 'UOH'},
]

students.forEach((key) => {
    console.log(key.university)
})
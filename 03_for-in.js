/*
What is the for...in Loop:

    The for...in loop is a special type of loop in JavaScript used to iterate over the enumerable properties of an object. It works with objects and arrays but is primarily designed for objects.


Key Features of for...in:
    1. Iterates over keys (properties) of an object.
    2. Can also be used on arrays but is not recommended for arrays because it iterates over the array's indices as strings.
    3. Returns enumerable property names, not the property values (though you can access values using the keys).


When to Use for...in:
    1. Iterating Over Objects: Ideal for looping through object properties.
    2. Avoid Using for Arrays: While it can work with arrays, it is not suitable as it iterates over indices as strings, which can lead to unexpected behavior if the array prototype has been modified.    


Syntax:
    for (let key in object) {
    Code block to execute
    }
    
*/



// 1. Iterating Over an Object

const user = {
    name: "Ihsan",
    age: 18,
    email: "ihsan@google.com",
};

// Using for...in loop
for (let key in user) {
    // console.log(`Key: ${key}, Value: ${user[key]}`);
}

// Output:
// Key: name, Value: Ihsan
// Key: age, Value: 18
// Key: email, Value: ihsan@google.com



// 2. Using for...in with Arrays
// Not recommending for an array "for in loop"

let langName = ['JavaScript', 'Python', 'Cpp']

for(let index in langName) {
    // console.log(`Index: ${index}, Value: ${langName[index]}`)
}




// 3. Checking Object Properties

const book = {
    title: "JavaScript ",
    author: "Ihsan Ullah",
    published: 2023,
}

// Using for...in loop with a condition
for (let key in book) {
    if (book.hasOwnProperty(key)) { // Ensure the property is not inherited
        // console.log(`${key} => ${book[key]}`)
    }
}

// Output:
// title => JavaScript Basics
// author => John Doe
// published => 2023




// 4. Nested Object

const student = {
    name: "Ihsan",
    rollNo: "S24-0071",
    grades: {
        math: 95,
        ICT: 90,
        'Natural Science': 89
    }
}

for(const key in student.grades) {
    // console.log(`${key}: ${student.grades[key]}`)
}




let myMap = new Map()
myMap.set(1)
myMap.set(2)
myMap.set(3)

for(const key in myMap) {
    console.log(`key: ${key}, value: ${myMap[key]}`)
}
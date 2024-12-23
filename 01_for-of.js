/*
For...of Loop:
    The for...of loop is used to iterate over the values of an iterable object, such as an array, string, Map, Set, or other objects that implement the iterable protocol.

    Unlike the for...in loop, which iterates over property keys, the for...of loop directly accesses the values.



Syntax:

    for (const element of iterable) {
        Code to execute for each element
    }
        1. element: Represents the current value in the iteration.
        2. iterable: An iterable object, like an array or string.


When to Use For...of
    To iterate directly over values in arrays, strings, Set, Map, or other iterable objects.
    When you don't need the index or key but just the element itself.



Key Points About For...of
    1. Works on Iterables: Only works with iterable objects like arrays, strings, Set, Map, etc.
    2. Access Values: Provides direct access to values, unlike for...in, which accesses keys.
    3. Avoid Index Handling: You don't need to manually manage an index counter.
*/


// 1. Iterating over an Array
let nums = [20, 30, 40, 50]
for(let num of nums) {
    // console.log(num)
}



// 2. Iterating over String 
let name = "Ihsan Ullah"
for (const char of name) {
    if(char === " ") {
        break;
    }
    console.log(char)
}
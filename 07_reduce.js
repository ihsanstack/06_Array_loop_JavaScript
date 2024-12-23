/*
Reduce():
    The reduce() method in JavaScript is used to iterate over an array and reduce it to a single value. It is a powerful array method that takes a callback function and an optional initial value as arguments.

    The reduce() method executes the callback function on each element of the array, accumulating a result as it iterates through the array.
    

Syntax:

    array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
    
    1. callback: A function that is executed on each element in the array, with the following parameters:
        accumulator: The accumulated result from the previous callback execution (or the initial value for the first iteration).
        currentValue: The current element being processed in the array.
        currentIndex (optional): The index of the current element.
        array (optional): The array on which reduce() is called.
    2. initialValue (optional): A value to use as the initial accumulator value. If not provided, the first element of the array is used as the initial accumulator, and iteration starts from the second element.    


How it Works
    1. The reduce() method starts with the initialValue (if provided) or the first element of the array.
    2. It iterates through the array, updating the accumulator by applying the callback function on each element.
    3. The final value of the accumulator after all iterations is returned.
*/




// 1. Summing Array Values

const arraySum = [1, 2, 3, 4, 5] 
// Declares an array `arraySum` containing the numbers 1 to 5.

initialValue = 0 
// Sets the initial value of the accumulator to 0.

const result = arraySum.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)
    return accumulator + currentValue
}, initialValue) 
// The `reduce()` method iterates over the array.
// - `accumulator`: Holds the running total of the sum.
// - `currentValue`: Represents the current element being processed in the array.
// - The callback adds `currentValue` to `accumulator` for each element.
// - The `initialValue` (0) is used as the starting value for the accumulator.

console.log(result) 
// Logs the final result, which is the sum of all elements in the array: 1 + 2 + 3 + 4 + 5 = 15.
// Output: 15

/*
Explanation:
Initial accumulator value: 0
Iteration 1: accumulator = 0 + 1 → 1
Iteration 2: accumulator = 1 + 2 → 3
Iteration 3: accumulator = 3 + 3 → 6
Iteration 4: accumulator = 6 + 4 → 10
Iteration 5: accumulator = 10 + 5 → 15
*/
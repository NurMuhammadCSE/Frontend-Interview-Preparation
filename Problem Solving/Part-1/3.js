/**
 * Task: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

const square = (num) => num * num;

const double = (num) => num * 2;

const addToFive = (num) => num + 5;

const allFunctions = (num) => num * num + num * 2 + num + 5;
console.log(allFunctions(5));

const composeFunctions = (num) => {
    const squared = square(num);
    const doubled = double(num);
    const addFive = addToFive(num);
    return squared + doubled + addFive;
}

console.log(composeFunctions(5))


const square1 = (num) => num * num;

const double1 = (num) => num * 2;

const addToFive1 = (num) => num + 5;

// নতুন ফাংশন যা ধাপে ধাপে ফাংশনগুলো ব্যবহার করবে
const composedFunction = (num) => {
  const squared = square(num);   // প্রথমে সংখ্যা স্কয়ার করা
  const doubled = double(squared); // স্কোয়ারের ফলাফলকে ডাবল করা
  const result = addToFive(doubled); // ডাবল করা ফলাফলে ৫ যোগ করা
  return result;
};

console.log(composedFunction(5)); // আউটপুট: 55

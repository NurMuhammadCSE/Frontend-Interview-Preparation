/**
Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.



Task: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

Task: Array Reduction
Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

Task: Leap Year Checker
Write a function that determines whether a given year is a leap year.

Task: Count Vowels:
Write a function that counts the number of vowels in a given string. Example: Happy New Year

Task: Unique Values
Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

Task: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.

Task: Advanced Sorting
Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

Task: Functional Programming - Reduce
Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

Task: Array Intersection
Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

*/

/**
 * 
 * Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
 */

const person = [
    {
        name:'Nur Muhammad',
        age: 24,
        gender: 'male',
    },
    {
        name:'Khadija',
        age: 19,
        gender: 'female',
    },
    {
        name:'Mishu',
        age: 23,
        gender: 'female',
    },
    {
        name:'Darda',
        age: 15,
        gender: 'male',
    },
]

const allFemales = person.filter(gender => gender.gender === 'female')
const allMales = person.filter(person => person.gender === 'male')
console.log(allMales)
console.log(allFemales)

const allMalesNames = allMales.map(name => name.name)
console.log(allMalesNames)


// Naming Convention
const people = [
    { name: 'Nur Muhammad', age: 24, gender: 'male' },
    { name: 'Khadija', age: 19, gender: 'female' },
    { name: 'Mishu', age: 23, gender: 'female' },
    { name: 'Darda', age: 15, gender: 'male' },
];

const females = people.filter(person => person.gender === 'female');
const males = people.filter(person => person.gender === 'male');

console.log(males);   // সব পুরুষদের অবজেক্ট দেখাবে
console.log(females); // সব নারীদের অবজেক্ট দেখাবে

const maleNames = males.map(person => person.name);
console.log(maleNames); // শুধুমাত্র পুরুষদের নামের অ্যারে দেখাবে

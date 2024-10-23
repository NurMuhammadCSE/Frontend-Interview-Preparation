/**
Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
 */

const cars = [
  {
    make: "BMW",
    model: "m-22",
    year: 2024,
  },
  {
    make: "TATA",
    model: "m-22",
    year: 2022,
  },
  {
    make: "MERCEDES",
    model: "m-22",
    year: 2020,
  },
];

// const sortCars = cars.sort((a, b) => a.year + b.year);
const sortCars = cars.sort((a, b) => a.year - b.year);
console.log(sortCars);

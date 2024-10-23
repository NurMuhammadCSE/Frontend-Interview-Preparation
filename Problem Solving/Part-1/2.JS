/***
 * Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
 */

const books = [
  {
    title: "Arabic",
    author: "Noman Ali Khan",
    year: 2023,
  },
  {
    title: "English",
    author: "Fatiha Ayyat",
    year: 2024,
  },
  {
    title: "Bangla",
    author: "Abul Kalam Azad",
    year: 2020,
  },
];

const booksTitles = books.map(book => book.title)
console.log(booksTitles)
/**
Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

const person = [
  {
    name: "Nur",
    age: 24,
  },
  {
    name: "Mishu",
    age: 22,
  },

  {
    name: "Darda",
    age: 20,
  },
];

const updateAge = (name, age) => {
  const foundPerson = person.find((person) => person.name === name);
  if (foundPerson) {
    foundPerson.age = age;
  } else {
    return "Not Found";
  }
};

updateAge("Nur", 27);
updateAge("Mishu", 26);

console.log(person);

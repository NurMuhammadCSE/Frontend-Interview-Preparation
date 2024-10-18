### Common Javascript Interview Question Part 1

### What is JavaScript?
Javascript is a high level, Prototype based, object-Oriented, Multi Paradigm, Interpreted or Just In Time Compiled, Dynamic, Single Threaded, Garbage Collected Programming Language with first function and a Non-Blocking Event Loop concurrency Model.

- Why we need use JS?
Website added Interactivity and Dynamic

### What is the difference between `var`, `let`, and `const` in JavaScript?

In JavaScript, var is function-scoped and was traditionally used to declare variables. let and const are block-scoped. The key difference between let and const is that let allows for reassignment while const creates a read-only reference.

var: Function-scoped, can be re-declared and updated, hoisted with undefined initialization.

let: Block-scoped, cannot be re-declared but can be updated, hoisted without initialization.

const: Block-scoped, cannot be re-declared or updated, hoisted without initialization.

Variables declared with var globally are attached to the window object. Type var dog = ‘browser’ in the browser’s console and then type window.dog. The value ‘browser’ appears!. let and const are not attached to the window object.

### What is the difference between `null` and `undefined`?

The null is an assignment value. It can be assigned to a variable as a representation of no value. But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value.

### What is the difference between `==` and `===`?
== (Loose Equality Operator): This operator performs type coercion, which means it converts the operands to the same type before making the comparison. It checks if the values are equal without considering their data types. For example, 1 == '1' will return true because JavaScript converts the string '1' to a number before comparison.

=== (Strict Equality Operator): This operator performs a strict comparison without type coercion. It checks if both the values and their data types are equal. For example, 1 === '1' will return false because the data types are different (number and string).

In summary, == checks for equality after type coercion, whereas === checks for strict equality, considering both the values and their data types.

Execution of == will be fast as compared to the === statement.

### What are the different ways to declare a variable in JavaScript?

There are three ways to declare a variable in JavaScript var, let, and const.





### What are Scopes in JavaScript?

A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.







### What is ternary operator in JavaScript?

The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the if statement.

```js
 console.log(condition ? true : false); 
```






### What is a closure in JavaScript?

A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

```js
function outer() {
  const name = 'Roadmap';

  function inner() {
    console.log(name);
  }

  return inner;
}

const closure = outer();
closure(); // Roadmap
```
In the above example, the inner function has access to the name variable of the outer function even after the outer function has returned. Therefore, the inner function forms a closure.






### Does Arrow functions have their own `this`?
No, arrow functions do not have their own this. Instead, they inherit the this of the enclosing lexical scope.



### Does `map()` method mutate the original array?

No, the map() method does not mutate the original array. It returns a new array with the results of calling a provided function on every element in the calling array.

```js
const roadmaps = ['JavaScript', 'React', 'Node.js'];

const renamedRoadmaps = roadmaps.map((roadmap) => {
  return `${roadmap} Roadmap`;
});

console.log(roadmaps); // ['JavaScript', 'React', 'Node.js']
console.log(renamedRoadmaps); // ['JavaScript Roadmap', 'React Roadmap', 'Node.js Roadmap']
```

### Does `forEach()` method return a new array?

No, the forEach() method does not return a new array. It simply calls a provided function on each element in the array.

```js
const roadmaps = ['JavaScript', 'React', 'Node.js'];

roadmaps.forEach((roadmap) => {
  console.log(roadmap);
});
```

### How to use `filter()` method?

You can use the filter() method to filter an array based on a condition. The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(evenNumbers); // [2, 4, 6]
```
### What is the difference between `map()` and `forEach()` methods?

The map() method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the forEach() method executes a provided function once for each array element.



### How to use `reduce()` method?

You can use the reduce() method to reduce an array to a single value. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```js
Syntax
array.reduce((accumulator, currentValue) => {
  // ...
}, initialValue);

Example
You can use the reduce() method to sum all the numbers in an array.

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(sum); // 21
```

### What is the difference between `map()` and `reduce()` methods?

The map() method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.



### What is Prototype Chain in JavaScript?

The prototype chain in JavaScript refers to the chain of objects linked by their prototypes. When a property or method is accessed on an object, JavaScript first checks the object itself. If it doesn't find it there, it looks up the property or method in the object's prototype. This process continues, moving up the chain from one prototype to the next, until the property or method is found or the end of the chain is reached (typically the prototype of the base object, which is null). The prototype chain is fundamental to JavaScript's prototypal inheritance model, allowing objects to inherit properties and methods from other objects.

Example
const roadmap = {
  getRoadmapUrl() {
    console.log(`https://roadmap.sh/${this.slug}`);
  },
};

const javascript = {
  name: 'JavaScript Roadmap',
  description: 'Learn JavaScript',
  slug: 'javascript',
  greet() {
    console.log(`${this.name} - ${this.description}`);
  },
};

Object.setPrototypeOf(javascript, roadmap); // or javascript.__proto__ = roadmap;

javascript.getRoadmapUrl(); // https://roadmap.sh/javascript
javascript.greet(); // JavaScript Roadmap - Learn JavaScript
In the above example, the javascript object inherits the getRoadmapUrl() method from the roadmap object. This is because the javascript object's prototype is set to the roadmap object using the Object.setPrototypeOf() method. In the javascript object, the getRoadmapUrl() method is not found, so JavaScript looks up the prototype chain and finds the getRoadmapUrl() method in the roadmap object.


### What is IIFE in JavaScript?

The IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
  console.log('Hello Roadmap!');
})();
The IIFE is frequently used to create a new scope to avoid variable hoisting from within blocks.

(function () {
  var roadmap = 'JavaScript';
  console.log(roadmap);
})();

console.log(roadmap); // ReferenceError: name is not defined

### What is Inheritance in JavaScript?

Inheritance is a way to create a new Class from an existing Class. The new Class inherits all the properties and methods from the existing Class. The new Class is called the child Class, and the existing Class is called the parent Class.

Example
class Roadmap {
  constructor(name, description, slug) {
    this.name = name;
    this.description = description;
    this.slug = slug;
  }

  getRoadmapUrl() {
    console.log(`https://roadmap.sh/${this.slug}`);
  }
}

class JavaScript extends Roadmap {
  constructor(name, description, slug) {
    super(name, description, slug);
  }

  greet() {
    console.log(`${this.name} - ${this.description}`);
  }
}

const js = new JavaScript(
  'JavaScript Roadmap',
  'Learn JavaScript',
  'javascript'
);

js.getRoadmapUrl(); // https://roadmap.sh/javascript
js.greet(); // JavaScript Roadmap - Learn JavaScript
In the above example, the JavaScript class inherits the getRoadmapUrl() method from the Roadmap class. This is because the JavaScript class extends the Roadmap class using the extends keyword. In the JavaScript class, the getRoadmapUrl() method is not found, so JavaScript looks up the prototype chain and finds the getRoadmapUrl() method in the Roadmap class.

### How you can find unique values in an array?

There are serveral ways to find unique values in an array. Here are some of them:

Using Set
const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = [...new Set(roadmaps)];
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']
Using filter()
const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = roadmaps.filter(
  (roadmap, index) => roadmaps.indexOf(roadmap) === index
);
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']
Using reduce()
const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = roadmaps.reduce((unique, roadmap) => {
  return unique.includes(roadmap) ? unique : [...unique, roadmap];
}, []);
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']
Using forEach()
const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = [];
roadmaps.forEach((roadmap) => {
  if (!uniqueRoadmaps.includes(roadmap)) {
    uniqueRoadmaps.push(roadmap);
  }
});
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']
Using for...of
const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = [];
for (const roadmap of roadmaps) {
  if (!uniqueRoadmaps.includes(roadmap)) {
    uniqueRoadmaps.push(roadmap);
  }
}
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']


###

###

######


###
###
###
###

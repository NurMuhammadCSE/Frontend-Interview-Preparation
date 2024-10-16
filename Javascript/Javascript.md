### 1. Is Javascript Single Threaded?

Yes, Javascript is a Single Threaded Language. Because It has Only One Call Stack and one heap memory.

Javascript is Synchronous and Blocking Nature. Its Meaning that code is executed line by line and one task must be completed before the next one begins.

Javascript has asynchronous capabilities. which allow certain operations to be executed independently of the main thread. this achieve through mechanisms like callbacks, promises, async/await. these asynchronous features enable Javascript to handle task such as fetching data, handling user input and performing I/O Operations without Blocking the main thread.

### 2. How does work in Javascript Engine?

Every Browser has a Javascript Engine that executes the Javascript code and convert it into machine code.

When Javascript code is executed => the Parser reads the code and produces an AST and stores it in memory => The Interpreter then process this AST and generates bytecode or machine code => which is executed by the computer => The Profiler is a Component of a Javascript Engine that monitors the execution of the code.

”Optimizing compiler” or Just-in-time (JIT) compiler makes certain assumptions based on profiling data and produces highly optimized machine code => CHATGPT

During this process, the call stack keeps track of the currently executing functions, and the memory heap is used for memory allocation.

Finally, the garbage collector comes into play to manage memory by reclaiming memory from unused objects => CHATGPT

### 3. Explain the Event loop in JavaScript.

The Event loop is a core component of the JavaScript runtime environment. It is executing asynchronous tasks. The event loop works by continuously monitoring two queues: the call stack and the event queue.

The call stack is a stack(LIFO) data structure that stores the functions that are currently being executed.

Web APIs is the place where the async operations (setTimeout, fetch requests, promises) with their callbacks are waiting to complete.

The job queue (or microtasks) is a FIFO (First In, First Out) structure that holds the callbacks of async/await, promises, process.nextTick() that are ready to be executed.

The task queue (or macrostasks) is a FIFO (First In, First Out) structure that holds the callbacks of async operations (timer like setInterval, setTimeout) that are ready to be executed.

The Event loop permanently monitors whether the call stack is empty. If the call stack is empty, the event loop looks into the job queue or task queue and dequeues any callback ready to be executed into the call stack.

### 4. Difference between var, let, and const?

var: Function-scoped, can be re-declared and updated, hoisted with undefined initialization.

let: Block-scoped, cannot be re-declared but can be updated, hoisted without initialization.

const: Block-scoped, cannot be re-declared or updated, hoisted without initialization.

Variables declared with var globally are attached to the window object. Type var dog = ‘browser’ in the browser’s console and then type window.dog. The value ‘browser’ appears!. let and const are not attached to the window object.

### 5. Different data types in Javascript?

JavaScript is a dynamic and loosely typed, or duck-typed language. It means that we do not need to specify the type of variable because the JavaScript engine dynamically determines the data type of a variable based on its values.

Primitive data types in JavaScript are the most basic data types that represent single values. They are immutable (cannot be changed) and directly hold a specific value.

Primitive Data Types => 1. Number 2. String 3. Boolean
Trivial Data Types => 1. Null 2. Undefined
Reference Data Types => 1. Array 2. Object

### 6. What is callback function and callback hell ?

Callback function is a function that is passed as an argument to another function and is intended to be executed after the completion of a specific task or at a given time.

In JavaScript, callbacks are commonly used to handle asynchronous operations.

```JS
function fetchData(url, callback) {
  setTimeout(() => {
    const data = 'Some data from the server';
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log('Processing data:', data);
}

fetchData('https://example.com/data', processData);
```

In this example, the fetchData function takes a URL and a callback function as arguments. After fetching the data from the server (simulated using setTimeout), it calls the callback function and passes the retrieved data to it.

`Callback Hell, also known as “Pyramid of Doom” is a term used in JavaScript programming to describe a situation where multiple nested callbacks are used within asynchronous functions`.

“It occurs when asynchronous operations depend on the results of previous asynchronous operations, resulting in deeply nested and often hard-to-read code.”

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.

To avoid Callback Hell, modern JavaScript provides alternatives like Promises and async/await.

### 7. What is Promise and Promise chaining?

`Promise: A Promise is an object in JavaScript used for asynchronous computations. It represents the result of an asynchronous operation, the result may be resolved or rejected.`

Promises have three states:

- Pending: The initial state. This is the state in which the Promise’s eventual value is not yet available.
- Fulfilled: The state in which the Promise has been resolved successfully, and the eventual value is now available.
- Rejected: The state in which the Promise has encountered an error or has been rejected, and the eventual value cannot be provided.

Promise constructor has two parameters (resolve, reject) which are functions. If the async task has been completed without errors then call the resolve function with message or fetched data to resolve the promise.

If an error occurred then call the reject function and pass the error to it.
we can access the result of promise using .then() handler.
we can catch the error in the .catch() handler.

// Creating a Promise

```js
const fetchData = new Promise((resolve, reject) => {
  // Simulate fetching data from a server
  setTimeout(() => {
    const data = "Some data from the server";
    // Resolve the Promise with the retrieved data
    resolve(data);
    // Reject the Promise with an error
    reject(new Error("Failed to fetch data"));
  }, 1000);
});

// Consuming the Promise
fetchData
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

`Promise chaining: The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.`

It involves chaining multiple .then() methods to a Promise to perform a series of tasks in a specific order.

```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
```

### 8. What is the difference between == and === operators ?

== (Loose Equality Operator): This operator performs type coercion, which means it converts the operands to the same type before making the comparison. It checks if the values are equal without considering their data types. For example, 1 == '1' will return true because JavaScript converts the string '1' to a number before comparison.

=== (Strict Equality Operator): This operator performs a strict comparison without type coercion. It checks if both the values and their data types are equal. For example, 1 === '1' will return false because the data types are different (number and string).

In summary, == checks for equality after type coercion, whereas === checks for strict equality, considering both the values and their data types.

Execution of == will be fast as compared to the === statement.

Some of the example that covers the above cases:

```js
0 == false // true
0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
```

### 9. Different ways to create an Object in Javascript ?

In JavaScript, there are several ways to create objects. Some common methods for object creation include:

a. Object Literals: The most straightforward way to create an object is by using object literals, which define an object’s properties and methods in a comma-separated list enclosed in curly braces.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    return "Hello, " + this.firstName + " " + this.lastName;
  },
};
```

b. Constructor Function: Constructor functions can be used to create multiple instances of an object with the new keyword. Inside the constructor function, properties and methods can be assigned to the this keyword.

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greet = function () {
    return "Hello, " + this.firstName + " " + this.lastName;
  };
}

let person1 = new Person("John", "Doe");
let person2 = new Person("Jane", "Smith");
```

c. Object.create(): The Object.create() method allows you to create a new object with a specified prototype object. This method provides more control over the prototype of the newly created object.

```js
let personProto = {
  greet: function () {
    return "Hello, " + this.firstName + " " + this.lastName;
  },
};

let person = Object.create(personProto);
person.firstName = "John";
person.lastName = "Doe";
```

d. Class Syntax (ES6): With the introduction of ES6, JavaScript supports class syntax for defining objects using the class keyword. This provides a more familiar and structured way to create objects and define their properties and methods.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return "Hello, " + this.firstName + " " + this.lastName;
  }
}

let person = new Person("John", "Doe");
```

e. Factory Functions: Factory functions are functions that return an object. This approach allows you to encapsulate the object creation process and easily create multiple instances with custom properties.

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    greet: function () {
      return "Hello, " + this.firstName + " " + this.lastName;
    },
  };
}

let person1 = createPerson("John", "Doe");
let person2 = createPerson("Jane", "Smith");
```

f. Object.assign(): The Object.assign() method can be used to create a new object by copying the values of all enumerable own properties from one or more source objects to a target object. This is particularly useful for merging objects or creating a shallow copy.

```js
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
let mergedObject = Object.assign({}, target, source);
```

g. Prototype Inheritance: JavaScript uses prototypal inheritance, allowing objects to inherit properties and methods from other objects. You can create objects by leveraging prototypal inheritance and using the prototype property of constructor functions or classes to define shared behavior.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.greet = function () {
  return "Hello, I am " + this.name;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let myDog = new Dog("Max", "Poodle");
```

### 10. What is rest and spread operator?

The rest operator, represented by three dots (...) is used in function parameters to collect a variable number of arguments into an array. It allows you to pass an arbitrary number of arguments to a function without explicitly defining them as named parameters.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs 10
```

The spread operator, also denoted by three dots (...) is used to spread the elements of an array or object into another array or object. It allows you to easily clone arrays, concatenate arrays, and merge objects.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
// mergedArray is [1, 2, 3, 4, 5, 6]
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
// mergedObject is { a: 1, b: 3, c: 4 }
```

### 11. What is a higher-order function?

Higher-order function in JavaScript is a `function that either takes one or more functions as arguments or returns a function as its result`. In other words, it operates on functions, either by taking them as arguments, returning them, or both.

```js
function operationOnArray(arr, operation) {
  let result = [];
  for (let element of arr) {
  result.push(operation(element));
}
  return result;
}

function double(x) {
  return x \* 2;
}

let numbers = [1, 2, 3, 4];
let doubledNumbers = operationOnArray(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]
```

They enable powerful techniques such as function composition, currying, and callback-based asynchronous operations. Understanding higher-order functions is essential for writing expressive and functional-style JavaScript code.

`An unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.`

### 12. What is Closure? What are the use cases of Closures?

Closure is a feature that allows the function to capture the environment (or to retain access to variables from the scope ) where it is defined, even after that scope has closed.

We can say the `closure is a combination of a function and lexical environment where that function is defined`.

In other words, a closure gives a function access to its own scope, the scope of its outer function, and the global scope, allowing it to “remember” and continue to access variables and parameters from these scopes.

```js
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  return innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer function's scope
  }

}

let myFunction = outerFunction();
myFunction(); // Output: I am from the outer function
```

`Closure is created every time when a function is created at the time of function creation and when you define a function inside another function.`

Execution context is an environment where JavaScript code is executed. For each function call a separate execution context is created and pushed into the execution stack. Once function execution completed it is popped off from stack.

Every execution context has a space in memory where its variables and function are stored, and once the function popped off from the execution stack a JavaScript Garbage collector clear all of these things.

Closures have several important use cases in JavaScript:

1. Data Privacy and Encapsulation: Closures can be used to create private data and encapsulate functionality within a limited scope. By defining functions within another function, the inner functions have access to the outer function’s variables, but these variables are inaccessible from outside the outer function. This allows for the creation of private data and methods that are not directly accessible from the outside, thereby enhancing data privacy and encapsulation.

2. Maintaining State: Closures are often used to maintain state in asynchronous operations and event handling.

3. Currying and Partial Application:
4. Module Pattern:
5. Callback Functions:

### 13. Explain the concept of hoisting in JavaScript.

Hoisting in JavaScript is the default behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the actual code execution. This means that you can use a variable or call a function before it’s declared in your code.

When you declare a variable using var, the declaration is hoisted to the top of its containing function or block and initialized with the default value of “undefined”.

```js
console.log(x); // Outputs: undefined
var x = 5;
```

Variables declared with let and const are hoisted as well but have a "temporal dead zone" where they cannot be accessed before their declaration.

```js
console.log(x); // Throws an error (ReferenceError)
let x = 5;
```

Function declarations are also hoisted to the top of their containing scope. You can call a function before it’s declared in your code.

```js
sayHello(); // Outputs: "Hello, world!"
function sayHello() {
  console.log("Hello, world!");
}
```

`Hoisting is not happening with an arrow function, function expression, or variable initialization.`

### 14. What is a Temporal dead zone?

The Temporal Dead Zone (TDZ) is a concept in JavaScript related to variable declarations using let and const.

When you declare a variable with let or const, it is hoisted to the top of its containing scope, However, unlike var, variables declared with let and const remain uninitialized in the TDZ.

Any attempt to access or use the variable before its actual declaration within the scope will result in a ReferenceError. This is to prevent the use of variables before they have been properly defined.

### 15. What is a prototype chain?

In JavaScript, every function and object has a property named prototype by default.

Every object in JavaScript has a prototype. A prototype is another object from which the current object inherits properties and methods. You can think of the prototype as a template or a parent object.

The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects

When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain until it finds the property or method. This process continues until it reaches the Object.prototype at the top of the chain.

### 16. What is the difference between Call, Apply, and Bind methods?

Call: The call() method invokes a function with a specified this value and individual arguments passed as comma-separated values

```js
const person1 = { name: "John" };
const person2 = { name: "Jane" };

function greet(greeting) {
  console.log(greeting + " " + this.name);
}

greet.call(person1, "Hello"); // Output: Hello John
greet.call(person2, "Hi"); // Output: Hi Jane
```

With call() method an object can use a method belonging to another object.

```js
const o1 = {
  name: "ravi",
  getName: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const o2 = {
  name: "JavaScript Centric",
};

o1.getName.call(o2); // Hello, JavaScript Centric
```

Apply: Invokes the function with a given this value but it accepts arguments as an array. It is useful when the number of arguments to be passed is not known in advance or when the arguments are already in an array.

```js
const numbers = [1, 2, 3, 4, 5];

const max = Math.max.apply(null, numbers);
console.log(max); // Output: 5
```

bind: instead of invoking it returns a new function and allows you to pass any number of arguments. bind() method takes an object as first argument and create a new function.

```js
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // Output: 42
```

### 17. What are lambda or arrow functions?

There are two types of functions in JavaScript

Regular Functions
Arrow Functions (Introduced in ES6)

Regular Function: We can write the regular function in two ways, i.e. Function declaration, and Function expression.

Arrow or Fat Arrow Function: Lambda functions, also known as arrow functions, are a feature introduced in JavaScript (ES6) that is a more concise syntax for writing function expressions. They have a shorter syntax compared to traditional function expressions and are particularly useful for creating anonymous functions and working with functional programming concepts.

There is no declaration approach here, we can write by using Function expressions only.

### 18. What is the currying function?

Currying is a technique in functional programming that transforms a function with multiple arguments into a series of functions, each taking a single argument. These curried functions can be composed together to build more complex functions.

In JavaScript, you can implement currying using closures and returning functions.

```js
// Regular function taking two arguments
function add(x, y) {
  return x + y;
}
// Curried version of the function
function curryAdd(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = curryAdd(5); // Partial application, creates a new function
console.log(add5(3)); // Output: 8
```

Currying is beneficial in functional programming and can make code more modular and reusable. It’s particularly useful in scenarios where you want to create functions with a varying number of arguments or build pipelines of data transformations.

### 19. What are the features of ES6?

ES6, also known as ECMAScript 2015, introduced several new features and enhancements to JavaScript, significantly expanding the language’s capabilities. Some key features of ES6 include:

1. Arrow Functions
2. Block-Scoped Variables
3. Classes
4. Modules
5. Template Literals: Template literals allow for embedding expressions and multi-line strings using backticks, providing a more convenient way to create complex strings in JavaScript.
6. Default Parameters
7. Rest and Spread Operators
8. Destructuring Assignment
9. Promises
10. Map, Set, WeakMap, WeakSet: ES6 introduced new built-in data structures, such as Map and Set, for more efficient and specialized handling of collections and key-value pairs.
11. Iterators and Generators
12. Enhanced Object Literals

### 20. What is Execution context, execution stack, variable object, and scope chain?

Execution Context: the execution context refers to the environment in which a piece of code is executed. It consists of the scope, variable object, and the value of the “this” keyword.

Whenever a function is executed, an execution context is created and it contains all the variables or properties of that function.

There are three types of execution context in JavaScript:

> Global Execution Context
> Functional Execution Context
> Eval Function Execution Context

Execution Stack: It is also known as the “call stack,” a LIFO (Last in, First out) data structure that stores all the execution context of the function calls that are in progress. When a function is called, a new execution context is created and pushed onto the stack. When the function completes, its context is popped off the stack.

The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches the context below it in the current stack.

The execution context is created during the creation phase. The following things happen during the creation phase:

LexicalEnvironment component is created.
VariableEnvironment component is created.
Variable Object: It is a part of the execution context that contains all the variables, function declarations, and arguments defined in that context.

Scope Chain: The scope chain is a mechanism for resolving the value of a variable in JavaScript. When a variable is referenced, the JavaScript engine looks for the variable first in the current execution context’s variable object. If it’s not found there, it continues to the next outer execution context, following the scope chain, until it finds the variable or reaches the global execution context.

### 21. What is the Factory function and generator function?

A factory function in JavaScript is a function that returns an object. It is a pattern used to create objects in a straightforward and organized manner. Instead of using constructor functions and the new keyword to create new objects, a factory function encapsulates the object creation process and returns a new object.

```JS
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
}

const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

console.log(person1.greet()); // Output: Hello, my name is Alice and I am 25 years old.
console.log(person2.greet()); // Output: Hello, my name is Bob and I am 30 years old.
```

A Generator function in JavaScript is a special type of function that can be paused and resumed during its execution.

A generator function produces a sequence of results instead of a single value.

When a generator function called it returns a generator object that can be used to control the execution of the function by calling the next() method.

The function’s code can be paused within the body using the yield keyword, and it can later be resumed from the exact point where it was paused.

```js
function\* numberGenerator() {
  let i = 0;
  while (true) {
  yield i++;
  }
}

const gen = numberGenerator();
console.log(gen.next().value); // Output: 0
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
```

This provides a powerful mechanism for creating iterators and handling asynchronous code.

### 22. Different ways to clone (Shallow and deep copy of object) an object?

A shallow copy is a copy of an object whose references are the same as the original object. This means that if you change the value of a property in the shallow copy, it will also change the value of the property in the original object.

```js
const user = {
  name: "Kingsley",
  age: 28,
  job: "Web Developer",
};
const clone = user;
```

A deep copy is a copy of an object whose references are not the same as the original object. This means that if you change the value of a property in the deep copy, it will not change the value of the property in the original object.

there different ways to create deep copy of an object.

a. JSON.parse and JSON.stringify: useful for nested object also.

```js
const originalObject = { name: "Alice", age: 25 };
const deepCopy = JSON.parse(JSON.stringify(originalObject));
```

b. structuredClone:
const myDeepCopy = structuredClone(myOriginal);

c. Spread Operator(…): any object with a nested object will not be deep copied.

```JS
const originalObject = { name: "Alice", age: 25 };
const deepCopy = {...originalObject};
deepCopy.name = "ravi"
console.log("originalObject", originalObject.name) // Alice
```

d. Object.assign(): the Object.assign() method should be used to deep copy objects that have no nested objects.

```JS
const originalObject = { name: "Alice", age: 25 };
const shallowCopy = Object.assign({}, originalObject);
```

### 23. How to make an object immutable? (seal and freeze methods)?

In JavaScript, you can make an object immutable using the Object.seal() and Object.freeze() methods.

Object.freeze(): (Completely Immutable) this method freezes an object, making it both sealed and marking all its properties as read-only. After freezing an object, its properties cannot be modified, added, or removed.

```JS
const obj = { name: 'Alice', age: 25 };
Object.freeze(obj);
obj.name = 'Bob'; // Not allowed
obj.address = '123 Street'; // Not allowed
delete obj.age; // Not allowed
```

Object.seal(): (Partially Immutable) this method seals an object, preventing new properties from being added and marking all existing properties as non-configurable. However, you can still modify the values of existing properties that are writable.

```js
const obj = { name: "Alice", age: 25 };
Object.seal(obj);
obj.name = "Bob"; // Allowed
obj.address = "123 Street"; // Not allowed (no new properties can be added)
delete obj.age; // Not allowed (existing properties cannot be deleted)
```

### 24. What is Event and event flow, event bubbling and event capturing?

In JavaScript, Event flow is the order in which an event like a click or a keypress is received on the web page or handled by the web browser. There are two phases in event flow: event capturing and event bubbling.

When you click an element that is nested in various other elements, before your click actually reaches its destination or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.

<div id="parent">
  <button id="child">Click me!</button>
</div>
Now, let’s explain event flow with this example:

Event Capturing Phase: When you click the button, the event starts its journey from the top (the root of the document) and moves down to the target element. In this case, it travels from the document’s root to the <div> (parent element), then to the <button> (child element). This is called the capturing phase.
Event Target Phase: The event reaches the target element, which is the <button> in this case.
Event Bubbling Phase: After reaching the target, the event starts bubbling up. It goes from the <button> back to the <div> and eventually to the root of the document. This is called the bubbling phase.
Here’s a simple JavaScript code snippet to see this in action:

```js
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Div clicked (capturing phase)");
  },
  true
); // The 'true' here indicates capturing phase.
document.getElementById("child").addEventListener("click", function () {
  console.log("Button clicked (target phase)");
});
document.getElementById("parent").addEventListener("click", function () {
  console.log("Div clicked (bubbling phase)");
});
```

When you click the button, you’ll see these messages in the console in the following order:

“Div clicked (capturing phase)”
“Button clicked (target phase)”
“Div clicked (bubbling phase)”

### 25. What is Event delegation?

Event delegation is a JavaScript programming technique that optimizes event handling for multiple elements.

Instead of attaching an event listener to each individual element, event delegation involves attaching a single event listener to a common ancestor element that is higher up in the DOM (Document Object Model) hierarchy.

When an event occurs on one of the descendant elements, it “bubbles up” to the common ancestor, where the event listener is waiting.

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

```js
var form = document.querySelector("#registration-form");
// Listen for changes to fields inside the form
form.addEventListener(
  "input",
  function (event) {
    // Log the field that was changed
    console.log(event.target);
  },
  false
);
```

### 26. What is a web worker or service worker in javascript?

Web Workers and Service Workers are two different concepts in JavaScript,

Web Workers are designed for concurrent JavaScript execution in the background, while Service Workers are used for creating Progressive Web Apps with offline capabilities and advanced features. Both are essential tools for enhancing the performance and functionality of web applications.

Each serves a distinct purpose in web development:

Web Workers:

- Concurrency: Web Workers are a browser feature that allows you to run JavaScript code in the background, separate from the main browser thread. This enables concurrent execution of tasks without blocking the user interface.
- Use Cases: Web Workers are commonly used for tasks that are computationally intensive or time-consuming, such as data processing, image manipulation, or complex calculations. By running these tasks in a separate thread, they don’t impact the responsiveness of the web page.
- Communication: Web Workers can communicate with the main thread using a messaging system. They can send and receive messages, allowing for coordination between the main thread and the worker.
- Browser Support: Web Workers are supported in most modern browsers.

Service Workers:

- Offline Capabilities: Service Workers are a more advanced feature used for creating Progressive Web Apps (PWAs). They act as proxy servers that run in the background and can intercept and cache network requests. This enables offline capabilities, such as serving cached content when the user is offline.
- Use Cases: Service Workers are primarily used for implementing features like offline access, push notifications, and background sync. They enable web apps to function even when there’s no internet connection.
- Lifecycle: Service Workers have their own lifecycle with events like install, activate, and fetch. They are typically registered at the beginning of a web app's life.
- Browser Support: Service Workers are supported in modern browsers and are a key technology for creating reliable and engaging web applications.

### 27. How to compare 2 JSON objects in javascript?

a. One simple way to compare two JSON objects is to use JSON.stringify to convert them into strings and then compare the strings.

```js
function areEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(areEqual(obj1, obj2)); // Output: true
```

b. You can use the Ramda library to compare two JSON objects as well. Ramda provides a function called equals for this purpose.

```js
const R = require("ramda");

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

console.log(R.equals(obj1, obj2)); // Output: true
```

c. Another option is to use a library, such as Lodash, that provides a method for deep comparison of objects.

```js
const _ = require("lodash");

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(_.isEqual(obj1, obj2)); // Output: true
```

================================================================================================================================================================================

1. Difference between slice and splice
2. first class function
3. pure function
4. IIFE
5. Memoization
6. scope
7. cookie vs local va session storage
8. window vs document
9. same origin policy
10. stopPropagation Method
11. Polyfill
12. Object.values vs Object.entries
13. debouncing
14. throttling
15. this keyword

Event Delegation: A Simplified Explanation
Imagine a crowded concert. Instead of giving each person a microphone to ask a question, you put one microphone on the stage and let people raise their hands when they want to speak. This is essentially what event delegation does in JavaScript.

What is Event Delegation?
Event delegation is a technique in JavaScript where you attach an event listener to a parent element instead of individual child elements. When an event occurs on any of the child elements, it bubbles up to the parent, triggering the event listener.

### 2. Explain how this works in JavaScript

1. Global Context:
   In the global scope (outside of any function), this refers to the global object.
   In a browser, the global object is window.
   In Node.js, the global object is global.
   Example:

```js
   console.log(this); // In a browser, this logs the `window` object
2. Function Context:
   Regular Function: When this is used inside a regular function, it refers to the global object if the function is called in the global context.
   Example:
   function showThis() {
   console.log(this);
   }
   showThis(); // Logs `window` (or `global` in Node.js)
   Object Method: When a function is called as a method of an object, this refers to the object that the method is a property of.
   Example:
   const obj = {
   name: 'Object',
   showThis: function() {
   console.log(this);
   }
   };
   obj.showThis(); // Logs the `obj` object
3. Arrow Functions:
   Arrow functions do not have their own this context. Instead, this is lexically inherited from the surrounding scope (the scope in which the arrow function was defined).
   Example:
   const obj = {
   name: 'Object',
   showThis: () => {
   console.log(this);
   }
   };
   obj.showThis(); // Logs the `this` from the outer scope, not `obj`
4. Constructor Functions and Classes:
   When using a constructor function or a class to create objects, this refers to the new object being created.
   Example:
   function Person(name) {
   this.name = name;
   }
   const person = new Person('John');
   console.log(person.name); // Logs 'John'
5. Event Handlers:
   In event handlers, this refers to the element that received the event.
   Example:
   const button = document.querySelector('button');
   button.addEventListener('click', function() {
   console.log(this); // Logs the button element
   });
6. call, apply, and bind Methods:
   You can explicitly set the value of this using call, apply, or bind.
   call and apply: Immediately invoke the function with a specific this value.
   Example:
   function greet() {
   console.log(this.name);
   }
   const person = { name: 'John' };
   greet.call(person); // Logs 'John'


bind: Creates a new function with a specific this value.
Example:
const boundGreet = greet.bind(person);
boundGreet(); // Logs 'John'
```

### 3. Explain how prototypal inheritance works

`All JavaScript objects have a __proto__ property with the exception of objects created with Object.create(null), that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's __proto__, and the __proto__'s __proto__ and so on, until it finds the property defined on one of the __proto__s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of delegation than inheritance`

```js
// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"


Key Concepts of Prototypal Inheritance:
Objects and Prototypes:

Every JavaScript object has a hidden property called [[Prototype]] (often accessed via __proto__ or Object.getPrototypeOf()), which refers to another object known as its "prototype."
The prototype object can have its own prototype, forming a chain called the "prototype chain." If you try to access a property on an object and it doesn't exist on that object, JavaScript will look up the prototype chain to find it.

Prototype Chain:
The prototype chain is a series of objects linked together by their [[Prototype]] properties. If a property or method is not found on an object, JavaScript will check its prototype, then the prototype's prototype, and so on, until it reaches the end of the chain (usually Object.prototype).

Object Creation:
Objects can be created with a specific prototype using Object.create(), which allows you to specify the prototype directly.
Example:
const person = {
  greet() {
    console.log("Hello!");
  }
};

const john = Object.create(person);
john.greet(); // Logs "Hello!"
Constructor Functions:

Before ES6, constructor functions were commonly used to create objects that share a prototype.
When you use the new keyword with a constructor function, it creates a new object with its [[Prototype]] set to the constructor's prototype property.
Example:
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

const john = new Person("John");
john.greet(); // Logs "Hello, my name is John"
Classes (ES6 Syntax):

With ES6, JavaScript introduced the class syntax, which provides a more familiar way to create objects and manage inheritance, though it still uses prototypal inheritance under the hood.
Example:
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const john = new Person("John");
john.greet(); // Logs "Hello, my name is John"
Inheritance:

You can create more specific objects that inherit from a base object using the prototype chain. This allows the derived objects to access properties and methods defined on the base object.
Example:
function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function() {
  console.log(`Walking on ${this.legs} legs`);
};

function Dog(name) {
  Animal.call(this, 4); // Inherit properties from Animal
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} says: Woof!`);
};

const buddy = new Dog("Buddy");
buddy.walk();  // Logs "Walking on 4 legs"
buddy.bark();  // Logs "Buddy says: Woof!"

Objects are created with a specific prototype, either using constructor functions, classes, or Object.create().
```

### 6. What is a closure, and how/why would you use one?

A closure is the combination of a function and the lexical environment within which that function was declared. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.
Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.

Why would you use one?

Data privacy / emulating private methods with closures. Commonly used in the module pattern.
Partial applications or currying.

```js
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter2()); // 1
console.log(counter1()); // 2

What is a Closure?
A closure in JavaScript is a feature where an inner function has access to variables and parameters of its outer function, even after the outer function has finished executing. Closures are created every time a function is created, allowing functions to "remember" the environment in which they were created.

How Closures Work:
When a function is defined inside another function, it forms a closure. The inner function can access:

Its own local variables.
Variables of the outer function.
Global variables.
Even after the outer function returns, the inner function retains access to these variables, because they are stored in the closure.

Example of a Closure:

function outerFunction(outerVariable) {
  const innerVariable = 'I am inside the outer function';

  return function innerFunction(innerParameter) {
    console.log('Outer Variable:', outerVariable);
    console.log('Inner Variable:', innerVariable);
    console.log('Inner Parameter:', innerParameter);
  };
}

const myClosure = outerFunction('I am the outer variable');

// Even though outerFunction has finished execution,
// myClosure still has access to the outerVariable and innerVariable
myClosure('I am the inner parameter');

Outer Variable: I am the outer variable
Inner Variable: I am inside the outer function
Inner Parameter: I am the inner parameter

Why and How to Use Closures:
Closures are used in various scenarios in JavaScript, including:

Data Privacy/Encapsulation:

Closures can be used to create private variables or methods. Variables inside a closure cannot be accessed directly from outside the closure, which makes them private.

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
Here, count is private to the createCounter function, and can only be modified or accessed using the methods returned by the closure.
Maintaining State:

Closures are useful for maintaining a state that persists between function calls.

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
Here, counter1 and counter2 are independent and maintain their own separate states due to closures.
Callback Functions:

Closures are often used in asynchronous operations like event handlers, timers, or API calls, where a function needs to access variables from its outer scope at a later time.

function setupEventHandler() {
  const message = "Button clicked!";

  document.getElementById("myButton").addEventListener("click", function() {
    alert(message);
  });
}

setupEventHandler();
Even after setupEventHandler has executed, the event handler function retains access to message due to the closure.
Partial Application or Currying:

Closures allow you to create functions with some preset arguments.

function greet(greeting) {
  return function(name) {
    console.log(greeting + ', ' + name);
  };
}

const sayHello = greet('Hello');
sayHello('John'); // Hello, John
sayHello('Jane'); // Hello, Jane
The greet function returns a closure that captures the greeting argument, allowing you to reuse it with different names.
Summary:
A closure is created when a function is defined inside another function, giving the inner function access to the outer function's scope.
Use Cases: Data privacy, maintaining state, callbacks, and currying are common scenarios where closures are useful.
Closures are a powerful feature that enables more functional and modular code in JavaScript.


================================================================================================================================================================================

h5bq, frontendInterviewHandbook, Top 30 Interview Questions, Sudheeraj Interview, Fireship, aksay Saini
```

================================================================================================================================================================================

1. Hoisting in JavaScript:

Hoisting refers to the behavior of moving variable and function declarations to the top of their respective scopes during compilation.

Variable initializations are not hoisted.

Example:

console.log(x); // undefined
var x = 5;

2. Closures in JavaScript:

Closures are functions combined with their lexical environments.

They allow access to outer scope variables even after the outer function finishes executing.

Example:

function outer() {
var x = 10;
return function inner() {
console.log(x);
};
}
var closure = outer();
closure(); // 10

3. Difference between null and undefined:

null represents the intentional absence of any object value.

undefined indicates a declared variable without a value assignment.

Example: Assigning null and undefined to variables.

var x = null; // explicitly set to null
var y; // undefined by default

4. Event Delegation Pattern:

Event delegation attaches a single event handler to a parent element instead of individual child elements.

Events propagate up the DOM tree, allowing multiple children to be handled efficiently.

Example:

document.addEventListener('click', function(event) {
if (event.target.matches('.button')) {
console.log('Button clicked!');
}
});

5. Understanding the this Keyword:

this refers to the object that owns the executing code.

Its value is determined by how a function is invoked.

Example: Demonstrating this usage.

var person = {
name: 'John',
sayHello: function() {
console.log('Hello, ' + this.name);
}
};
person.sayHello(); // Hello, John

6. Prototypal Inheritance in JavaScript:

Prototypal inheritance allows objects to inherit properties and methods from their prototypes.

Every object has an internal [[Prototype]] property accessible via _proto_.

Example: Implementing prototypal inheritance.

var parent = {
name: 'Parent',
sayHello: function() {
console.log('Hello from ' + this.name);
}
};
var child = Object.create(parent);
child.name = 'Child';
child.sayHello(); // Hello from Child

7. Promises in JavaScript:

Promises handle asynchronous operations, representing their eventual completion or failure.

Chaining promises enables sequential execution.

Example: Working with promises.

function asyncOperation() {
return new Promise(function(resolve, reject) {
setTimeout(function() {
resolve('Operation completed successfully!');
}, 1000);
});
}
asyncOperation()
.then(function(result) {
console.log(result);
})
.catch(function(error) {
console.error(error);
});

😎 Difference between let, const, and var:

let and const have block scope and are not hoisted, while var has function scope and is hoisted.

let allows reassignment, const is a constant, and var allows re-declaration.

Example: Variable declaration and scoping differences.

let x = 5;
const y = 10;
var z = 15;

if (true) {
let x = 20; // New block scope
const y = 25; // New block scope
var z = 30; // Overrides the outer variable
}

9. Event Bubbling and Capturing:

Event bubbling propagates events from inner elements to their parents, while capturing does the opposite.

Example: Explaining event bubbling and capturing.

<div id="outer">
<div id="inner">
Click me!
</div>
</div>

<script>
document.getElementById('inner').addEventListener('click', function(event) {
console.log('Inner element clicked!');
}, false); // false for event bubbling (default)

document.getElementById('outer').addEventListener('click', function(event) {
console.log('Outer element clicked!');
}, true); // true for event capturing
</script>

10. The bind Method:
    The bind method creates a new function with a fixed this value.
    It is used to bind objects to functions or create partially applied functions.

Example: Using the bind method.

```JS
var obj = {
name: 'John',
sayHello: function() {
console.log('Hello, ' + this.name);
}
};
var boundFunc = obj.sayHello.bind(obj);
boundFunc(); // Hello, John
```

11. Arrow Functions vs. Regular Functions:

Arrow functions are shorthand syntax for function expressions.

They differ from regular functions in terms of this binding, arguments object, and constructor usage.

Example: Comparing arrow functions and regular functions.

```JS
var regularFunc = function() {
console.log(this); // Window object
};

var arrowFunc = () => {
console.log(this); // Lexical this (parent scope's this)
};
```

12. The reduce Method:
    The reduce method applies a function against an accumulator and an array to reduce it to a single value.
    It is useful for calculations or transforming data.
    Example: Applying the reduce method.

```JS
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(accumulator, current) {
return accumulator + current;
}, 0);
console.log(sum); // 15
```

13. The Event Loop:
    The event loop manages asynchronous operations in JavaScript, ensuring responsiveness.
    It consists of the call stack, task queue, and microtask queue.

14. Memoization in JavaScript:
    Memoization caches expensive function call results for quick retrieval.
    It optimizes recursive or repetitive functions.
    Example: Implementing memoization.

```JS
function fibonacci(n, memo = {}) {
if (n <= 1) {
return n;
}

if (!memo.hasOwnProperty(n)) {
memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}

return memo[n];
}

console.log(fibonacci(10)); // 55
```

15. Difference between == and === Operators:

== performs loose equality with type coercion, while === performs strict equality without coercion.

Example: Comparing loose and strict equality.

console.log(1 == '1'); // true (loose equality)
console.log(1 === '1'); // false (strict equality)

================================================================================================================================================================================

Key Takeaways:

Hoisting moves variable and function declarations to the top of their scopes during compilation.

Closures combine functions with their lexical environments, allowing access to outer scope variables.

Understand the difference between null (absence of object value) and undefined (undeclared or uninitialized variable).

Event delegation pattern enables handling events efficiently by attaching a single event handler to a parent element.

Master the concept of this and its value based on the function invocation.

Prototypal inheritance allows objects to inherit properties and methods from their prototypes.

Promises simplify handling asynchronous operations and enable sequential execution.

Differentiate let, const, and var based on scope, hoisting, reassignment, and re-declaration.

Understand event bubbling and capturing in order to handle events effectively.

Use the bind method to set a specific this value or create partially applied functions.

Be aware of the differences between arrow functions and regular functions, such as this binding and usage as constructors.

Leverage the reduce method to perform calculations or transform data.

Understand the event loop’s role in managing asynchronous operations.

Memoization optimizes function performance by caching results of expensive function calls.

Differentiate between loose equality (==) and strict equality (===) operators.

# ========================================================================================

Event Bubbling = Child => Parent (Default Behavior)
Event Capturing/Trickling = Parent => Child (capture: true)

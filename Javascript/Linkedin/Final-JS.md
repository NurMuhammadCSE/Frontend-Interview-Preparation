### 1. What is Javascript?

JavaScript is a high-level, prototype-based, object-oriented, multi-paradigm programming language. It is interpreted or just-in-time (JIT) compiled, dynamic, single-threaded, and garbage-collected. JavaScript is known for its non-blocking event loop concurrency model, which makes it ideal for web development and handling asynchronous operations.

Why do we need JavaScript?
JavaScript is essential for adding interactivity, dynamic behavior, and real-time updates to websites.

### 2. Different data types in Javascript?

JavaScript is a dynamic and loosely typed, or duck-typed language. It means that we do not need to specify the type of variable because the JavaScript engine dynamically determines the data type of a variable based on its values.

Primitive data types in JavaScript are the most basic data types that represent single values. They are immutable (cannot be changed) and directly hold a specific value.

Primitive Data Types: Immutable, directly hold a value, and include Number, String, Boolean, Null, and Undefined.

Reference Data Types: Mutable, hold a reference to a value, and include Object and Array.

### 3. Is Javascript Single Threaded?

Yes, Javascript is a Single Threaded Language. Because It has Only One Call Stack and one heap memory.

Javascript is Synchronous and Blocking Nature. Its Meaning that code is executed line by line and one task must be completed before the next one begins.

Javascript has asynchronous capabilities. which allow certain operations to be executed independently of the main thread. this achieve through mechanisms like callbacks, promises, async/await. these asynchronous features enable Javascript to handle task such as fetching data, handling user input and performing I/O Operations without Blocking the main thread.

### 4. How does work in Javascript Engine?

Every browser has a JavaScript engine that executes JavaScript code and converts it into machine code.

When JavaScript code is executed:

Parsing: The parser reads the code and generates an Abstract Syntax Tree (AST), which represents the code’s structure, and stores it in memory.

Interpreting: The interpreter processes the AST and initially generates bytecode or a basic version of machine code.

Execution and Optimization: The engine executes this code. The Profiler component monitors code execution. The Optimizing Compiler (Just-in-Time, or JIT compiler) then uses this profiling data to make certain assumptions and produce highly optimized machine code.

During this process:
The call stack keeps track of currently executing functions.

The memory heap is used to allocate memory dynamically.

Finally, the garbage collector reclaims memory from objects that are no longer in use, helping to manage memory and improve performance.

### 5. What is the difference between var, let, and const in JavaScript ?

In JavaScript, var is function-scoped and was traditionally used to declare variables. let and const are block-scoped. The key difference between let and const is that let allows for reassignment while const creates a read-only reference.

var: Function-scoped, can be re-declared and updated, hoisted with undefined initialization. When declared globally, var variables are attached to the window object.

let: Block-scoped, cannot be re-declared but can be updated, hoisted without initialization. so accessing it before declaration will throw a ReferenceError.

const: Block-scoped, cannot be re-declared or updated, hoisted without initialization. accessing it before declaration also throws a ReferenceError.

### 6. What is the difference between null and undefined?

The null is an assignment value. It can be assigned to a variable as a representation of no value.

But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value.

### 7. What is the Difference between == and === in JavaScript ?

== (Loose Equality Operator): This operator performs type coercion, meaning it converts the operands to the same type before comparing them. It checks if the values are equal without considering their data types.

=== (Strict Equality Operator): This operator performs a strict comparison without type coercion. It checks if both the values and their data types are equal.

In summary, == checks for equality after type coercion, whereas === checks for strict equality, considering both the values and their data types.

### 8. What are Scopes in JavaScript?

In JavaScript, scope determines where variables, functions, and objects are accessible in the code. There are three main types of scopes:

Global Scope: Variables declared outside functions are globally accessible.

Function Scope (Local Scope): Variables declared within a function are accessible only within that function.

Block Scope: Variables declared within a block (like within if or for statements) are accessible only inside that block (for let and const).

Summary
Global Scope: Accessible everywhere in the code.
Function Scope: Accessible only within the function.
Block Scope: Accessible only within the block (for let and const).

### 9. What is a closure in JavaScript?

Closure is a combination of a function and lexical environment where that function is defined.

In other words, A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

Closure is created every time when a function is created at the time of function creation and when you define a function inside another function.

Closures have several important use cases in JavaScript:

1. Data Privacy and Encapsulation.
2. Maintaining State.
3. Currying and Partial Application.
4. Module Pattern.
5. Callback Functions.

### 10. Explain the concept of hoisting in JavaScript.

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

Summary:
var declarations are hoisted and initialized with undefined.

let and const declarations are hoisted but not initialized (they remain in the TDZ).

Function declarations are hoisted, but function expressions and arrow functions are not fully hoisted.

### 11. What is a Temporal dead zone?

The Temporal Dead Zone (TDZ) is a concept in JavaScript related to variable declarations using let and const.

When you declare a variable with let or const, it is hoisted to the top of its containing scope, However, unlike var, variables declared with let and const remain uninitialized in the TDZ.

Any attempt to access or use the variable before its actual declaration within the scope will result in a ReferenceError. This is to prevent the use of variables before they have been properly defined.

### 12. What is a prototype chain?

In JavaScript, every function and object has a special property called prototype.

Every object in JavaScript has a prototype. A prototype is another object from which the current object inherits properties and methods. You can think of the prototype as a template or a parent object.

The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects

When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain until it finds the property or method. This process continues until it reaches the Object.prototype at the top of the chain.

### 13. What are the features of ES6?

ES6, also known as ECMAScript 2015, introduced several new features and enhancements to JavaScript, significantly expanding the language’s capabilities. Some key features of ES6 include:

1. Arrow Functions
2. Block-Scoped Variables
3. Classes
4. Modules
5. Template Literals
6. Default Parameters
7. Rest and Spread Operators
8. Destructuring Assignment
9. Promises
10. Map, Set, WeakMap, WeakSet
11. Iterators and Generators
12. Enhanced Object Literals

### 14. Asynchronous vs Synchronous code?

The difference between Asynchronous and Synchronous code is that Asynchronous code does not block the execution of the program while Synchronous code does.

Asynchronous code:
Asynchronous code is executed in the background and it does not block the execution of the program. It is usually used to perform tasks that take a long time to complete, such as network requests.

Synchronous code:
Synchronous code is executed in sequence and it blocks the execution of the program until it is completed. If a task takes a long time to complete, everything else waits.

### 15. What is Event Loop in JavaScript? How does Event Loop work in JavaScript?

The Event loop is one the most important aspect to understand in JavaScript. It is the mechanism that allows JavaScript to perform non-blocking operations. It is the reason why we can use asynchronous code in JavaScript. The Event loop is a loop that constantly checks if there are any tasks that need to be executed. If there are, it will execute them. If there are no tasks to execute, it will wait for new tasks to arrive.

The Event loop has two main components: the Call stack and the Callback queue.

Call Stack:
The Call stack is a data structure that stores the tasks that need to be executed. It is a LIFO (Last In, First Out) data structure, which means that the last task that was added to the Call stack will be the first one to be executed.

Callback Queue:
The Callback Queue (or task queue) stores the callback functions that are ready to be executed, usually after an asynchronous task is completed. It's a FIFO (First In, First Out) structure, meaning the first task that was added is the first one to be processed.

Event Loop's Workflow:
Executes tasks from the Call Stack.

For an asynchronous task, such as a timer, it runs in the background. JavaScript proceeds to the next task without waiting.

When the asynchronous task concludes, its callback function is added to the Callback Queue.

If the Call Stack is empty and there are tasks in the Callback Queue, the Event Loop transfers the first task from the Queue to the Call Stack for execution.

### 16. What is Promise and Promise chaining?

Promise: A Promise is an object in JavaScript used for asynchronous computations. It represents the result of an asynchronous operation, the result may be resolved or rejected.

Promises have three states:

- Pending: The initial state. This is the state in which the Promise’s eventual value is not yet available.

- Fulfilled: The state in which the Promise has been resolved successfully, and the eventual value is now available.

- Rejected: The state in which the Promise has encountered an error or has been rejected, and the eventual value cannot be provided.

Promise constructor has two parameters (resolve, reject) which are functions. If the async task has been completed without errors then call the resolve function with message or fetched data to resolve the promise.

Promise chaining: The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

It involves chaining multiple .then() methods to a Promise to perform a series of tasks in a specific order.

Key Points
Promises help handle asynchronous code in a more readable and structured way compared to callbacks.

A Promise has three states: pending, fulfilled, and rejected.

Promise chaining allows sequential execution of multiple asynchronous operations by linking .then() methods.

You can handle success with .then() and errors with .catch()

### 17. What is callback function and callback hell ?

Callback function is a function that is passed as an argument to another function and is intended to be executed after the completion of a specific task or at a given time.

In JavaScript, callbacks are commonly used to handle asynchronous operations.

Callback Hell, also known as “Pyramid of Doom” is a term used in JavaScript programming to describe a situation where multiple nested callbacks are used within asynchronous functions.

It occurs when asynchronous operations depend on the results of previous asynchronous operations, resulting in deeply nested and often hard-to-read code.

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.

To avoid Callback Hell, modern JavaScript provides alternatives like Promises and async/await.

Key Points
Callback functions are used to handle asynchronous operations in JavaScript.

Callback Hell occurs when callbacks are nested deeply, making code difficult to read and debug.

To avoid Callback Hell, JavaScript offers Promises and async/await as modern alternatives for handling asynchronous operations more cleanly.

### 18. What is the purpose of the async/await in JavaScript?

The async/await, introduced in ES2017, provides a more readable and cleaner way to handle asynchronous operations compared to callbacks and promises. An async function always returns a promise, and within such a function, you can use await to pause execution until a promise settles.

async/await provides a more readable way to work with asynchronous code and helps avoid deeply nested callbacks.

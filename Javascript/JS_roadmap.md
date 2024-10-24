# Common JavaScript Interview Questions: Part 1

JavaScript is one of the most widely used programming languages, and being proficient in it is essential for developers. In this article, we’ll explore some of the fundamental JavaScript interview questions that can help you prepare for your next coding interview.

## What is JavaScript?

JavaScript is a **high-level**, **prototype-based**, **object-oriented**, **multi-paradigm**, **interpreted**, or **just-in-time (JIT) compiled** programming language. It’s **dynamic**, **single-threaded**, **garbage-collected**, and features **first-class functions** along with a **non-blocking, event-driven concurrency model** powered by the event loop.

## Why do we use JavaScript?

JavaScript is primarily used to add **interactivity** and **dynamic behavior** to websites, making them more user-friendly and engaging.

## What is the difference between `var`, `let`, and `const` in JavaScript?

- **`var`**: Function-scoped, can be re-declared and updated, hoisted with an initial value of `undefined`. Variables declared with `var` are attached to the `window` object globally.
- **`let`**: Block-scoped, cannot be re-declared but can be updated, hoisted without initialization.
- **`const`**: Block-scoped, cannot be re-declared or updated, hoisted without initialization. It creates a read-only reference.

Example:

```js
var dog = "browser";
console.log(window.dog); // Output: 'browser'
```

### What is the difference between null and undefined?

null: Represents an assigned value of "nothing". It’s explicitly set by the programmer.
undefined: A primitive value that represents a variable that has not been assigned any value or is absent.

### What is the difference between == and ===?

== (Loose Equality Operator): Performs type coercion and checks if values are equal, ignoring data types. For example, 1 == '1' returns true.
=== (Strict Equality Operator): Performs strict comparison without type coercion. Both the value and type must be the same. For example, 1 === '1' returns false.
In general, it’s recommended to use === for more predictable behavior.

### What are the different ways to declare a variable in JavaScript?

Variables can be declared using var, let, and const. The scope and behavior differ as described above.

### What are Scopes in JavaScript?

Scope determines the accessibility of variables and functions in different parts of the code. There are three types of scopes:

Global Scope: Variables declared outside functions are globally accessible.
Function Scope (Local Scope): Variables declared within a function are accessible only within that function.
Block Scope: Variables declared within a block (like within if or for statements) are accessible only inside that block (for let and const).

What is the ternary operator in JavaScript?
The ternary operator is a shorthand for the if-else statement. It takes three operands and returns a value based on a condition.

console.log(condition ? 'True' : 'False');

### What is a closure in JavaScript?

A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

```js
function outer() {
  const name = "I am Closure";

  function inner() {
    console.log(name);
  }

  return inner;
}

const closure = outer();
closure(); // I am Closure
```

In the above example, the inner function has access to the name variable of the outer function even after the outer function has returned. Therefore, the inner function forms a closure.

### Do Arrow functions have their own this?

No, arrow functions do not have their own this. Instead, they inherit this from the enclosing lexical scope.

Does the map() method mutate the original array?
No, the map() method creates a new array based on the callback function applied to each element of the original array. It does not modify the original array.

Example:

const roadmaps = ['JavaScript', 'React', 'Node.js'];
const updatedRoadmaps = roadmaps.map(roadmap => `${roadmap} Roadmap`);

### Does the forEach() method return a new array?

No, the forEach() method does not return a new array. It simply executes a function for each element in the array without returning anything.

### How to use the filter() method?

The filter() method creates a new array containing all elements that pass a given test.

Example:

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);

### What is the difference between map() and forEach() methods?

map(): Returns a new array with the results of calling a provided function on every element.
forEach(): Executes a provided function for each element but doesn’t return anything.

### How to use the reduce() method?

The reduce() method reduces an array to a single value by executing a reducer function on each element.

Example:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((acc, current) => acc + current, 0);
```

### What is IIFE in JavaScript?

An Immediately Invoked Function Expression (IIFE) is a function that runs immediately after it is defined.

```js
(function () {
  console.log("Hello Roadmap!");
})();
```

### What is Inheritance in JavaScript?

Inheritance allows you to create a new class from an existing class, inheriting its properties and methods.

Example:

```js
class Roadmap {
  constructor(name, slug) {
    this.name = name;
    this.slug = slug;
  }

  getRoadmapUrl() {
    console.log(`https://roadmap.sh/${this.slug}`);
  }
}

class JavaScript extends Roadmap {
  greet() {
    console.log(`Learn ${this.name}`);
  }
}

const js = new JavaScript("JavaScript Roadmap", "javascript");
js.getRoadmapUrl(); // Output: 'https://roadmap.sh/javascript'
```

### How can you find unique values in an array?

Here are a few ways to find unique values in an array:

Using Set:
const uniqueValues = [...new Set(array)];

Using filter():
const uniqueValues = array.filter((value, index) => array.indexOf(value) === index);

Using reduce():
const uniqueValues = array.reduce((unique, value) => unique.includes(value) ? unique : [...unique, value], []);


What is a JavaScript promise?

What is the purpose of the `async/await` in JavaScript?
The async/await, introduced in ES2017, provides a more readable and cleaner way to handle asynchronous operations compared to callbacks and promises. An async function always returns a promise, and within such a function, you can use await to pause execution until a promise settles.

What is callback hell in JavaScript?

How to handle event bubbling in JavaScript?
Event bubbling is a concept in the Document Object Model (DOM) that describes the way in which events propagate or "bubble up" through the hierarchy of nested elements in the DOM.

When an event, such as a mouse click, occurs on a DOM element, the event will be handled by the element first, then its parent element, and so on, until the event reaches the root element. This behavior is called event bubbling.

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Scenario of clicking on the child element
parent.addEventListener('click', () => {
  console.log('Handled Last');
});

child.addEventListener('click', () => {
  console.log('Handled First');
});
In the above example, when you click on the child element, the event will be handled by the child element first, then its parent element, and so on, to the root element unless you stop the propagation (event.stopPropagation()) of the event.


What is Event Capturing in JavaScript?

Event capturing is the first phase of event propagation. In this phase, the event is captured by the outermost element and propagated to the inner elements. It is also known as trickling. It is the opposite of event bubbling.

What is the spread operator in JavaScript?

The spread operator in JavaScript is represented by three dots (...). It allows the elements of an array or properties of an object to be expanded or "spread" into individual elements or properties. This can be useful in various contexts, such as when passing elements as function arguments, cloning arrays and objects, or merging arrays and objects.

const roadmaps = ['JavaScript', 'React', 'Node.js'];
const bestPractices = ['AWS', 'API Security'];

const resources = [...roadmaps, ...bestPractices];
console.log(resources); // ['JavaScript', 'React', 'Node.js', 'AWS', 'API Security']
const roadmap = {
  name: 'JavaScript',
  type: 'dynamic',
};

const roadmapClone = { ...roadmap }; // shallow copy
console.log(roadmapClone); // { name: 'JavaScript', type: 'dynamic' }


What is `preventDefault()` method in JavaScript?

The event.preventDefault() method is used to prevent the default action of an event. For example, when you click on a link, the default action is to navigate to the link's URL. But, if you want to prevent the navigation, you can use event.preventDefault() method.

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Clicked on link!');
});


What is Hoisting in JavaScript?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where the functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. Note that hoisting only moves the declaration, not the initialization.

console.log(x === undefined); // true
var x = 3;
console.log(x); // 3
The above code snippet can be visualized in the following way:

var x;
console.log(x === undefined); // true
x = 3;
console.log(x); // 3


What is DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.

Garbage collection in JavaScript?

The JavaScript engine uses automatic garbage collection. JavaScript automatically manages memory by freeing up space used by objects no longer needed. This algorithm is called Mark and Sweep, which is performed periodically by the JavaScript engine.

How to make an Object immutable in JavaScript?

To make an object immutable, you can use Object.freeze() method. It prevents the modification of existing property values and prevents the addition of new properties.

const roadmap = {
  name: 'JavaScript',
};

Object.freeze(roadmap);

roadmap.name = 'JavaScript Roadmap'; // throws an error in strict mode
console.log(roadmap.name); // JavaScript

What is Type Casting?

Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.

What are Explicit binding in JavaScript?

Explicit binding is a way to explicitly state what the this keyword is going to be bound to using call, apply or bind methods of a function.

const roadmap = {
  name: 'JavaScript',
};

function printName() {
  console.log(this.name);
}

printName.call(roadmap); // JavaScript
printName.apply(roadmap); // JavaScript

const printRoadmapName = printName.bind(roadmap);
printRoadmapName(); // JavaScript
In the above example, the this keyword inside the printName() function is explicitly bound to the roadmap object using call, apply or bind methods.

How to accept variable number of arguments in a JavaScript function?

In JavaScript, you can accept a variable number of arguments in a function using the arguments object or the rest parameter (...).

Using the arguments object:
The arguments is an array-like object that holds all of the passed arguments. They are only available inside the function body.

function displayArgs() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
displayArgs(1, 2, 3, 4); // Outputs: 1, 2, 3, 4
Using the rest parameter:
The rest parameter allows you to represent an indefinite number of arguments as an array.

function displayArgs(...args) {
  args.forEach((arg) => console.log(arg));
}
displayArgs(1, 2, 3, 4); // Outputs: 1, 2, 3, 4
The rest parameter (...args in the example) is generally more modern and flexible, and it provides an actual array, unlike the array-like arguments object.

How to parse JSON in JavaScript?

In order to parse JSON, you can use the JSON.parse() method. It parses a JSON string and returns the JavaScript equivalent.

const json = '{"name":"JavaScript","year":1995}';
const roadmap = JSON.parse(json);

console.log(roadmap.name); // JavaScript
console.log(roadmap.year); // 1995


How to debug JavaScript code?

Debugging JavaScript code can be achieved through various methods and tools. Here's a basic guide:

Console Logging:
You can use console.log(), console.warn(), console.error(), etc., to print values, variables, or messages to the browser's developer console.

console.log('Value of x:', x);
Browser Developer Tools:
Most modern browsers come equipped with developer tools. You can access these tools by pressing F12 or right-clicking on the web page and selecting Inspect or Inspect Element.

Sources Tab: Allows you to see the loaded scripts, set breakpoints, and step through the code.
Console Tab: Displays console outputs and allows for interactive JavaScript execution.
Network Tab: Helps in checking network requests and responses.
Setting Breakpoints:
In the Sources tab of the browser's developer tools, you can click on a line number to set a breakpoint. The code execution will pause at this line, allowing you to inspect variables, the call stack, and continue step-by-step.

Debugger Statement:
Inserting the debugger; statement in your code will act as a breakpoint when the browser developer tools are open. Execution will pause at the debugger; line.

function myFunction() {
  debugger; // Execution will pause here when dev tools are open
  // ... rest of the code
}
Call Stack and Scope:
In the developer tools, when paused on a breakpoint or debugger; statement, you can inspect the call stack to see the sequence of function calls. The Scope panel will show you the values of local and global variables.

Remember, debugging is an iterative process. It often involves setting breakpoints, checking variables, adjusting code, and re-running to ensure correctness.


Asynchronous vs Synchronous code?

The difference between Asynchronous and Synchronous code is that Asynchronous code does not block the execution of the program while Synchronous code does.

Asynchronous code
Asynchronous code is executed in the background and it does not block the execution of the program. It is usually used to perform tasks that take a long time to complete, such as network requests.

console.log('Before');

setTimeout(() => {
  console.log('Hello');
}, 1000);

console.log('After');
Synchronous code
Synchronous code is executed in sequence and it blocks the execution of the program until it is completed. If a task takes a long time to complete, everything else waits.

console.log('Before');

for (let i = 0; i < 1000000000; i++) {}

console.log('After');


What is Event Loop in JavaScript?

The Event loop is one the most important aspect to understand in JavaScript. It is the mechanism that allows JavaScript to perform non-blocking operations. It is the reason why we can use asynchronous code in JavaScript. The Event loop is a loop that constantly checks if there are any tasks that need to be executed. If there are, it will execute them. If there are no tasks to execute, it will wait for new tasks to arrive.

How does Event Loop work in JavaScript?

The Event loop has two main components: the Call stack and the Callback queue.

Call Stack
The Call stack is a data structure that stores the tasks that need to be executed. It is a LIFO (Last In, First Out) data structure, which means that the last task that was added to the Call stack will be the first one to be executed.

Callback Queue
The Callback queue is a data structure that stores the tasks that have been completed and are ready to be executed. It is a FIFO (First In, First Out) data structure, which means that the first task that was added to the Callback queue will be the first one to be executed.

Event Loop's Workflow:
Executes tasks from the Call Stack.

For an asynchronous task, such as a timer, it runs in the background. JavaScript proceeds to the next task without waiting.

When the asynchronous task concludes, its callback function is added to the Callback Queue.

If the Call Stack is empty and there are tasks in the Callback Queue, the Event Loop transfers the first task from the Queue to the Call Stack for execution.

setTimeout(() => console.log('Hello from the timer'), 0);
console.log('Hello from the main code');

setTimeout is processed, and because it's asynchronous, its callback is placed in the Callback Queue.
The next line, console.log("Hello from the main code"), is logged immediately.
Although the timer duration is 0 milliseconds, its callback has to wait until the Call Stack is empty. After the main code logs, the callback is moved from the Callback Queue to the Call Stack and executed.
The result is "Hello from the main code" being logged before "Hello from the timer"

Is it possible to run JavaScript outside the browser?

Yes, it is possible to run JavaScript outside the browser. There are several ways to run JavaScript outside the browser. You can use Node.js, Deno, Bun, or any other JavaScript runtime environment.

Is JavaScript a compiled or interpreted language?

JavaScript is an interpreted language. This means that the JavaScript code is not compiled before it is executed. Instead, the JavaScript engine interprets the code at runtime.

What are Heap and Stack in JavaScript?

The Heap and Stack in JavaScript Engine are two different data structures that store data in different ways.

Stack
The Stack is a small, organized region of memory. It is where primitive values, function calls, and local variables are stored. It follows a "Last In, First Out" (LIFO) order, meaning that the last item added to the stack is the first one to be removed. Each function invocation creates a new stack frame, which contains the function's local variables, return address, and other contextual data.

Heap
The Heap is a large, mostly unstructured region of memory. It is where objects, arrays, and functions are stored. Variables from the Stack (e.g., in functions) point to locations in the Heap for these dynamically allocated structures.

When you declare a primitive type (like a number or boolean), it's usually managed in the stack. But when you create an object, array, or function, it's stored in the heap, and the stack will hold a reference to that location in the heap.

For example:

const name = 'JavaScript'; // Stored on the stack
const roadmap = { name: 'JS' }; // `roadmap` reference on the stack, actual object { name: 'JS' } in the heap
In the code above, the primitive value JavaScript for variable name is directly stored on the stack. For the object assigned to roadmap, its actual data resides in the heap, and the reference to this data (a memory address pointer) is held on the stack.

What is Nullish Coalescing Operator?

The Nullish Coalescing Operator (??) returns the right operand if the left one is null or undefined, otherwise, it returns the left operand. It's useful for setting default values without considering falsy values like 0 or '' as absent.

console.log(null ?? 'hello'); // hello
console.log(undefined ?? 'hello'); // hello
console.log('' ?? 'hello'); // ''
console.log(0 ?? 'hello'); // 0

How to create Infinite Loop in JavaScript?

ou can use the while or for loop to create an infinite loop.

While loop
To create an infinite loop with the while loop, we can use the true keyword as the condition.

while (true) {
  // do something
}
For loop
To create an infinite loop with the for loop, we can use the true keyword as the condition.

for (let i = 0; true; i++) {
  // do something
}



Can you merge multiple arrays in JavaScript?


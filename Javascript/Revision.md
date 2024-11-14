### What are Scopes in JavaScript?

A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.

Lexical Scope:
Lexical scope নির্ধারণ করে যে ফাংশনের ভেতরের ভেরিয়েবল কোথা থেকে অ্যাক্সেস করা যাবে। এটি ফাংশনের ভিতরের ও বাইরের স্কোপকে বোঝায়। জাভাস্ক্রিপ্টের ফাংশনগুলি তাদের ডিফাইন করা যায়গা থেকে উপরের স্কোপের অ্যাক্সেস পায়।

### What is a closure in JavaScript?

A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

### What is a prototype chain?

In JavaScript, every function and object has a property named prototype by default.

Every object in JavaScript has a prototype. A prototype is another object from which the current object inherits properties and methods. You can think of the prototype as a template or a parent object.

The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects

When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain until it finds the property or method. This process continues until it reaches the Object.prototype at the top of the chain.


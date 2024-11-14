// /**
// Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
//  */

// const cars = [
//   {
//     make: "BMW",
//     model: "m-22",
//     year: 2024,
//   },
//   {
//     make: "TATA",
//     model: "m-22",
//     year: 2022,
//   },
//   {
//     make: "MERCEDES",
//     model: "m-22",
//     year: 2020,
//   },
// ];

// // const sortCars = cars.sort((a, b) => a.year + b.year);
// const sortCars = cars.sort((a, b) => a.year - b.year);
// console.log(sortCars);



// let var1 = {
//   name :" Paul"
// }

// let var2 = var1;

// var2.name = "John";
// console.log(var1)
// console.log(var2)

// Array.from('123')
// Array.of('3')
// Array.of('123')
// new Array('123')
// ['1', '2', '3']

// new Array('1', '2', '3')


// element.addEventListener('click', function (event) {
  
// })


// let hero = {
//   name : "Malcolm",
//   motto(){
//     console.log("oaky")
//   },
//   age : undefined
// }

// console.log(JSON.stringify(hero))

// let x = 5;
// console.log(x)

// if (truly) {
//   let x = 6;
//   console.log(x);
// }

// console.log(x)


// 'string'.length == 6

// `42\n`.length == 4
// `42\n`.length == 3

// ''.length == 0

// ''.length() == 0

// ''.length == null

// 'string'.length() == 6

// 'string'.length == undefined

// {
//   "name":"nur",
//   "age": 22,
//   "rank":['roll':'captain']
// }

// const json = {
//   "name":"nur",
//   'wife': 1
// }
//  const reslt = JSON.parse(json)

//  console.log(typeof json, typeof reslt, reslt.name, reslt.wife)


//  console.log("1"[0])


//  let obj = {
//   answer : ''
//  }

//  let obj.answer = '42'

var obj = {
  a:1,
  b:{
    c:2
  }
}

function f1():never {
  return 
}
function f1():never {
  return undefined
}
function f1():never {
  return null
}
function f1():never {
  throw new Error
}



function request(name) {
  console.log("I need " + name)
}

function  get(items, cb) {
  cb(items)
}

get('clothes', request)


for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log(i)


let obj = {
  x : 2
}

let add = function (a,b,c)  {
  return this.x + a + b + c
}

let arr = [3, 4, 5]
let bound = add.bind(obj)

console.log(add.call(obj, 3, 4, 5))
console.log(add.apply(obj, arr))
console.log(bound(3, 4, 5))


for (let i = 0; i < 5; i++) {
setTimeout(() => {
  console.log(i)
}, i * 1000);  
}

console.log(typeof typeof 1)
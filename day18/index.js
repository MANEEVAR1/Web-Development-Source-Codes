// const greet= ()=> {
//   console.log("Hello " + name + "!!");
// }

// greet("Akshat")

// Functions -> block of code which is used to execute any task

// parameters are the values/ variables passed in a function, such that we can use them inside the function itself
function greet(name, age) {
  //   name = "Akshat";
  console.log("Good morning " + name);
  console.log("Your age is " + age);
  // output -> good morning akshat
}

// let x = greet("Varish", 20);

// function mul(a, b) {
//   return a * b;
// }
// return type void -> no value is returned from the function,
// but return type is number then function is returning some num value
// let result = mul(9, 6);

// console.log(result);

// arrow functions
const mul = (a, b) => {
  // react, nextjs, react native -> they all use this type of arrow functions
  return a * b;
};

let result = mul(50, 2);
console.log(result);

// scope of variables
// variables is declared -> till when we can access/ use that variable in our code

//global variable
let x = 10; // this x variable is declared globally

// global variables can be accessed from anywhere in the code
// but local variables can only be accessed within that function or block

function sample() {
  console.log(x);
  // local variable
  let y = 20; // this y variable is declared locally
}

console.log(x);
console.log(y);
sample();

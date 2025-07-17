// loops -> are used to execute a specific task repeatedly
// for loop
// let i =0;
// i++ i+1
// for(let i =0;i<=10;i++){
//     console.log(i);
// }

// from 10 to 0
// for(let i =10;i>=0;i--){
//     alert("HELLO "+i)
// }

// DSA -> pattern building questions

// ******
// ******
// ******
// ******

// function -> for loop jo muje alert with a hello 1

// while loop
// let x = 10;
// console.log("This is while loop");
// while(x>=0){
//     console.log(x);
//     x--;
// }

// do while loop
let x = 10;
console.log("This is do while loop");
do {
  console.log(x);
  x--;
} while (x >= 0);

// 2's table

// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// const myElement = document.getElementById("paragraph");
let text = "";
for (let i = 1; i <= 10; i++) { // i++ -> i+1
  text += "This is para " + i + "<br/>";
  // i = 10 -> This is para 10
  document.getElementById("paragraph").innerHTML = text;
  // this is para 1 <br/>
}

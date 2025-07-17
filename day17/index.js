// arrays -> data type -> store multiple value, same type ka data

let str = "Neel";
let arr = ["Neel", "Varish", "Vansh"];

console.log(arr[2]);

arr[1] = "Rishabh";
// arr [] = ["Neel", "Rishabh", "Vansh"]
console.log(arr[2]);

arr.push("Heena");
arr.push("Roshan");
arr.push("Akshat");

// ["Neel", "Rishabh", "Vansh", "Heena", "Roshan", Rakesh]
console.log(arr);

let pop_element = arr.pop();
// ["Rishabh", "Vansh", "Heena", "Roshan", Rakesh]

console.log(arr);
console.log(pop_element);
// pop function is used to remove the last element added in the array

// let num_arr = [10,30,44,67]
// console.log(num_arr[2]);


// Problem statement
//  i want a button (in html file) -> onclick -> function {
//  array of numbers (5 to 10) -> arr[1,2,3,4,5]
// for loop -> this adds all the elements in the array, and show its sum in console.log = 15
// 
// }
console.log("it is outside the html file");

// switch( // condition){

//     case x:
//         // what code need to be executed when the result x has arose

//     case y:
//         // what code need to be executed when the result y has arisen

// }

let num = prompt("Enter number from 1 to 5");

switch (num) {
  case "0":
    alert("Sunday");
    break;
  case "1":
    alert("Monday");
    break;
  case "3":
    alert("Three");
    break;
  case "4":
    alert("Four");
    break;
  case "5":
    alert("Five");
    break;
}

function showPopUp() {
  let name = prompt("what is ur name");
  alert("Welcome " + name);
}

let day = new Date().getDay();
console.log(day);

// function getDay(){
//     check day
//     0: Sunday
//     1: Monday
//     2: Tuesday
//     3: Wednesday
//     4: Thursday
//     5: Friday
//     6: Saturday
// }

console.log("it is outside the html file");

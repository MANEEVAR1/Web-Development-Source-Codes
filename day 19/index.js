

// Objects and JSON, Creating and accessing objects, Nested objects, JSON stringify and parse


// let student = {
//   name: "Sara",
//   age: 20,
//   address: {
//     street: "Saraswati enclave",
//     city: "Lahore"
//   }
// };
// student.name = "Akshat"
// console.log(student.address.street)
// console.log(student)

// let jsonString = JSON.stringify(student);
// console.log(jsonString)




// objects -> like its a box, which contains various elements / properties

let obj = {
    name: "Akshat",
    age: 20,
    course : "B.Tech",
    isStudent : true
}

// console.log(obj)

// console.log(obj.age)

obj.name = "Rakesh"
obj.course = "BBA"
// console.log(obj)


let student = {
    name : "Rakesh",
    age : 19,
    course : "B.Tech",
    // nested objects
    address : {
        city: "Gurgaon",
        pinCode : 122001,
        temp: 26.5,
        state : "Haryana"
    }
}

// console.log(student)

// console.log(student.address.temp)

student.address.pinCode = 122004
// console.log(student)


// JSON -> JavaScript Object Notation
// which is frequently used in transferring data between servers and clients 
// or in frontend and backend systems

// python -> js -> using JSON


// stringify function is used to parse Objects into the JSON strings, such that we can use them into our backend or frontend systems
let jsonString = JSON.stringify(student)
// console.log(jsonString)


// JSON declaration
let json = '{"name":"Akshat","rollNo":"23AI07","course":"B.Tech"}'


console.log(json)

let obj1 = JSON.parse(json)
console.log(obj1)
console.log(typeof obj1)
console.log(typeof json)
console.log(obj1.rollNo)

// {
//     "name": "Adeel Solangi",
//     "language": "Sindhi",
//     "id": "V59OF92YF627HFY0",
//     "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
//     "version": 6.1
//   },
//   {
//     "name": "Afzal Ghaffar",
//     "language": "Sindhi",
//     "id": "ENTOCR13RSCLZ6KU",
//     "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
//     "version": 1.88
//   },
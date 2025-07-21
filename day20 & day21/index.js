// const title = document.getElementById("title");
// const paragraph = document.querySelector('p');
// // title.innerText = "Namaste"
// title.style.color = 'white';
// paragraph.style.color = '#216fd4ff';
// paragraph.style.fontWeight = "bold"
// const para = document.getElementById("lorem")
// para.innerText = "This is a para"
// console.log(para.parentElement)
// const bg = document.querySelector('.bg-black');
// bg.style.backgroundColor = 'black';
// bg.style.padding = "30px"
// bg.style.marginTop = "40px"
// bg.style.borderRadius = "100px"

// const container = document.getElementsByClassName("container");
// for (let i = 0; i < container.length; i++) {
//   container[i].style.borderRadius = "20px"
//   container[i].style.backgroundColor = "#7cc466ff"
//   container[i].style.padding = "20px"
//   container[i].style.marginTop = "20px"
//   container[i].style.textAlign = "center"
// }
// // container.style.borderRadius = "20px";
// // container.style.backgroundColor = "green";
// // container.style.padding = "20px";
// // container.style.textAlign = "center";

// console.log(title.textContent)
// console.log(title.innerHTML)
// console.log(title.innerText)

// const heading1 = document.getElementById("heading1");
// // heading1.innerText = "Hello world"
// heading1.innerHTML = '<span style="color:blue">HELLO</span> World !'

// // id = input
// // id = btn for button
// const btn = document.getElementById("btn")
// const resultValue = document.getElementById("resultValue")
// btn.addEventListener("dblclick", (e) => {
//   let inputValue = document.getElementById("input").value;
//   console.log(inputValue);
//   resultValue.innerHTML += inputValue + "<br/>"
// })


// DOM -> Document Object Model

let heading = document.getElementById("heading")
// heading.innerHTML = "hello world"
// heading.style.color = "red"
let helloSpan = document.getElementById("helloSpan")
helloSpan.style.color = "#21ed7d"

// innerText // innerHTML // textContent

console.log(heading.innerText)
console.log(heading.innerHTML)
console.log(heading.textContent)

document.getElementById("body").style.backgroundColor="black"
heading.style.color = "white"

let container = document.getElementById("container")
container.style.backgroundColor = "#155be8"
container.style.borderRadius = "30px"
container.style.padding = "20px"
container.style.marginTop = "50px"
container.style.textAlign = "center"

let texts = document.getElementsByClassName("text")
// texts - > collection of elements -> consider it an array
console.log(texts)
texts[0].innerText = "Element at 0th index"
texts[1].innerText = "Element at 1st index"
texts[2].innerText = "Element at 2nd index"
for(let i =0; i<texts.length;i++){
  texts[i].style.color = "#e87015"
}

// event listeners -> element on which this function is applied
// then we can listen to that event which user has done

let btn = document.getElementById("btn")
btn.addEventListener("dblclick",(e)=>{ // double mouse click
  console.log("button is double-clicked")
})

let container2 = document.getElementById("container2")
container2.style.backgroundColor = "#155be8"
container2.style.borderRadius = "30px"
container2.style.padding = "20px"
container2.style.marginTop = "50px"
container2.style.textAlign = "center"


let result = document.getElementById("result")
result.style.color = "white"
btn.addEventListener("dblclick",(e)=>{ 
  // console.log("button is clicked")
  let inputFieldValue = document.getElementById("inputField").value
  console.log(inputFieldValue)
  result.innerHTML += "<br/>"+inputFieldValue
})

const list = document.getElementById("list")
let li1 = document.createElement("li1")
li1.innerHTML = '<span style="color: white">Sample1</span> <br/>'
let li2 = document.createElement("li2")
li2.innerHTML = '<span style="color: white">Sample2</span> <br/>'
let li3 = document.createElement("li3")
li3.innerHTML = '<span style="color: white">Sample3</span> <br/>'
list.appendChild(li1)
list.appendChild(li2)
list.appendChild(li3)
li2.remove()
li1.remove()

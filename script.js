//! task 1
const box = document.getElementById("box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");

//! item 1
item1.style.margin = "auto";
item1.style.width = "100px";
item1.style.height = "100px";
item1.style.backgroundColor = "orange";
//! item 2
item2.style.margin = "auto";
item2.style.width = "100px";
item2.style.height = "100px";
item2.style.backgroundColor = "orange";
//! item 3
item3.style.margin = "auto";
item3.style.width = "100px";
item3.style.height = "100px";
item3.style.backgroundColor = "orange";

box.onclick = function () {
  box.style.cssText = `
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: blue;
    padding : 20px
    `;
};

box1.onclick = function () {
  box1.style.cssText = `
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color:red;
    padding : 20px
    `;
};

box2.onclick = function () {
  box2.style.cssText = `
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: green;
    padding : 20px
    `;
};

//? task-2

const clckme = document.querySelector(".clckme");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");

content1.style.backgroundColor = "blue";
content2.style.backgroundColor = "red";
content3.style.backgroundColor = "green";

clckme.style.backgroundColor = "chartreuse;";
clckme.style.margin = "auto";
clckme.style.width = "100px";
clckme.style.height = "100px";

content1.onclick = function () {
  clckme.style.cssText = `
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color:blue;
    color: white;
    
    `;
};

content2.onclick = function () {
  clckme.style.cssText = `
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color:red;
    color: white;
    
    `;
};

content3.onclick = function () {
  clckme.style.cssText = `
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color:green;
    color: white;
    
    `;
};

//TODO task-3

const btn = document.querySelector("#btn");

function generateColor(){
 const arr= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
 let code = "";
 for(let i=0; i<6; i++){
  code += arr[Math.floor(Math.random()*16)];
 }
 return `#${code}`
}


btn.addEventListener('click', () => {
  document.getElementById("box3").style.backgroundColor = generateColor();
});





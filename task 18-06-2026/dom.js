//getElementById()
let element = document.getElementById("heading");
console.log(element);

// queryselector()
let para = document.querySelector(".text");

console.log(para);

//queryselectorAll()
let paragraphs = document.querySelectorAll(".text");

console.log(paragraphs);

// read text
let heading =
document.getElementById("heading");

console.log(heading.textContent);
heading.textContent ="DOM topic welcomes you";

// innerhtml
document.getElementById("box").innerHTML =
"<h2>Hello World</h2>";

// style propertyy
//heading.style.color = "red";

//heading.style.backgroundColor = "yellow";

//heading.style.fontSize = "40px";

//parentelement
let para1 =
document.querySelector("p");

console.log(
para1.parentElement
);

//child element
let parent =
document.getElementById("parent");

console.log(
parent.children
);
// next sibling
let heading1 =
document.querySelector("h2");

console.log(
heading.nextElementSibling
);
// previous sibling
let para2 =
document.querySelector("p");

console.log(
para2.previousElementSibling
);

//createelement
let newHeading =
document.createElement("h3");
newHeading.textContent ="Dynamic Heading";

//create multiple elements
for(let i=1;i<=3;i++)
{
    let item =
    document.createElement("li");

    item.textContent =
    "Item " + i;

    console.log(item);
}

// appendchild()
let container =
document.getElementById("container");

let heading4 =
document.createElement("h2");

heading4.textContent =
"New Heading";

//container.appendChild(heading4);


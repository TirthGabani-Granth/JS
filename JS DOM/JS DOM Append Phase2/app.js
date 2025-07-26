// let links = document.querySelectorAll('.box a');

// // for(links of links) {
// //     links.style.color = "purple";
// // }

// // for(i=0; i < links.length; i++) {
// //     links[i].style.color = "purple";
// // }

// a <p> with red text that says "Hey I'm red!"
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector('body').prepend(para1);

para1.classList.add("red");

// an h3 with blue text that says "I'm blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue!";
document.querySelector('body').prepend(h3);

h3.classList.add("blue");

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says "I'm in a div"
// a <p> that says "ME TOO!"
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!"

div.append(h1);
div.append(para2);
div.classList.add("box")
document.querySelector('body').prepend(div);

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Change the input’s placeholder text to "username"
//Change the button’s id to "btn"
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Access the button using querySelector and the button's id. Change the button's background color to blue and the text color to white.
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// //Create an <h1> element on the page, Set its text to "DOM Practice" Make it underlined Change its color to purple.
// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOMPractice</u>";
// document.querySelector("body").append(h1);

// Create a <p> tag on the page and set its text to Apna College Delta Practice, where Delta is bold.
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice"; // Here use markup why cause B tag use so, when we use tag use markup.
document.querySelector("body").append(p);
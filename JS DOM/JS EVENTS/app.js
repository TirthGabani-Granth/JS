// For buttton
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// // For paragraph 
// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//     console.timeLog("parah was clicked");
// });

// let box =document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//     console.log("mouse inside box");
// });

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onclick = sayName;

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("you double clicked me");
//     });
// }

// function sayHello() {
//     alert("hello");
// }

// function sayName() {
//     alert("ApnaCollege");
// }

// btn.onclick = function () {
//     alert("button was clicked");
// };


// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
//     console.dir(btn);
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("key =", event.key);
//     console.log("code =", event.code);
//     console.log("key was pressed");
//     console.log(event);
// });

// inp.addEventListener("keyup", function() {
//     console.log("key was relesed");
// });

// for Arrow event
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("code =", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.code == "ArrowUp") {
//         console.log("charecter moves forward");
//     } else if(event.code == "ArrowDown") {
//         console.log("charecter moves backward");
//     } else if(event.code == "ArrowLeft") {
//         console.log("charecter moves Left");
//     } else if(event.code == "ArrowRight") {
//         console.log("charecter moves Right");
//     } 
//    });

// for key A D L R to [up and down use].
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("code =", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.code == "KeyU") {
//         console.log("charecter moves up");
//     } else if(event.code == "KeyD") {
//         console.log("charecter moves down");
//     } else if(event.code == "KeyL") {
//         console.log("charecter moves Left");
//     } else if(event.code == "KeyR") {
//         console.log("charecter moves Right");
//     } 
//    });

//first practice of form event with prevent default so action page to direct jump is being stop.
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("form submitted");
//     alert("form submitted");
// });



// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// for this more event purpose when it's complete remove it.
//     console.dir(form);

//     let user = this.elements[0];//form.elements[0]
//     let pass = this.elements[1];
    
//     // let inp = document.querySelector("input");
//     //now we are taking user value
//     // let user = document.querySelector("#user");// we are using this user pass but without that one more way to run this
//     // let pass = document.querySelector("#pass");// by form object to do this possible.
    
//     console.dir(user);
//     console.dir(pass);
//     console.log(user.value);
//     console.log(pass.value);// now we don't need to query selector cause

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
//     // console.dir(inp);
//     // console.log(inp.value);
// });



// More events
// change events
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// }); 

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//     console.log("change event");
//     console.log("final value =", this.value);
// })

// user.addEventListener("input", function () {
//     console.log("input event");
//     console.log("final value =", this.value);
// })

// activity of this more event 
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function () {
//     console.log(inp.value);
//     p.innerText = inp.value;
// });

// Assignment question Try out the following events in EventListener on your own: - mouseout - keypress - scroll - load
// let inp = document.querySelector("#text");
// inp.addEventListener("keypress", function (event) {
//     console.log("key was pressed");
//     console.log("key=", event.key);
//     console.log("code=", event.code);
//     console.log(event);
//     console.log(event.type);
// });

// let box = document.querySelector("#scrollBox");

// box.addEventListener("scroll", function () {
//   console.log("Scrolling is happening inside the box!");
// });

// window.addEventListener("load", function () {
//   console.log("Load event executed");
//   alert("Page has been fully loaded");
// });

// Assignment Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.
let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.append(btn);

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});

//Create an input element with a placeholder “enter your name” and an H2 heading.
//The user should be allowed to enter only letters (A-Z, a-z) and spaces.That input should appear live/dynamically in the H2 heading.
//All other characters should not appear in the heading.
let inp = document.querySelector("#user");
let head = document.querySelector("#head");

inp.addEventListener("input", function () {
  // Regex થી માત્ર a-z, A-Z અને space જ રહે તે માટે filter કરીએ છીએ
  let finalValue = inp.value.replace(/[^a-zA-Z ]/g, ""); //In this ^ this means [expect "સિવાય"] so tena sivay na nahi aave replace thai jase.
      head.innerText = finalValue;
});

// //Event Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();// propagation means jo change and travel something bubbling will stop 
//     console.log("ul was clicked");
// });

// for(li of lis) {
// li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
// })
// }

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

//for a existing element to remove for use event delegation with bubbling.
ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// let delBtns = document.querySelectorAll(".delete");  // this is not work for new element add on todo list only for existing element on work.
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

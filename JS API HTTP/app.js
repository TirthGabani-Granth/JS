let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ", e);
        return "/";
    }
}

// This is for cat fact.
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact); //cause we directly by result so this we have to comment.
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//   console.log(res); // res = response
//   return res.json();// here we use return cause method chaining so remember this in callback hell.
// })
// .then((data) => {
//    console.log("data1 =", data.fact);// we can print only data also so we can see data with fact (data) like this.
//    return fetch(url);
// })
// .then((res) => {
//   return res.json();
// })
// .then((data2) => {
//   console.log("data2 =", data2.fact);
// })
// .catch((err) => { // now we want that we have to want one more response so using method chaining by it's done.
//   console.log("ERROR - ", err);
// });
// console.log("i am happy");

// Now we perform same using async function.
//  async function getFacts() {
//   try {
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data.fact);

//   let res2 = await fetch(url);
//   let data2 = await res2.json();
//   console.log(data2.fact);
//  } catch(e) {
//   console.log("error -", e);
//  }
//  console.log("bye");
// }
// console.log(getFacts());

// Now we Axios to better use then fetch method to http request get.

async function getFacts() {
  try {
  let res = await axios.get(url);
  return res.data.fact; // we use axios for better and compact use for so we can direct do this (res.data), and can do fact also.
 } catch(e) {
  console.log("error -", e);
  return "No fact found";
 }
}
console.log(getFacts());

// For jokes API 
// So we can send header by axios this way so when see this revise your self.
const url ="https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = { headers: { Accept: "application/json"} };
        let res = await axios.get(url, config); //configuration
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}
console.log(getJokes());
// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();  
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }
// three();

// callbacks nesting -> callback hell
h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) { this is callback hell example for only learning when revision then see it.
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
        let num = Math.floor(Math.random() * 5) + 1;
        if (num > 3) {
            reject("promise rejected");
        }

        h1.style.color = color;
        resolve("color changed!");
    }, delay);
  });
}

// now this for async await function and compact version which we see untill now.
async function demo2() { // this is the best and compact and good way of writing code version of callback hell.
 try {                   // try-catch => code ma error aave to handle kare ne baki no code sarkhi rite run thay
 await changeColor("red", 1000);
 await changeColor("orange", 1000);
 await changeColor("green", 1000);
 await changeColor("blue", 1000);
} catch (err) {
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
}
console.log(demo2());

// this is promise in use then and catch by chaining of promises.
changeColor("red", 1000)// promise chaining
.then(() => {
  console.log("red color was completed");
  return changeColor("orange", 1000);
})
.then(() => {
  console.log("orange color was completed");
  return changeColor("green", 1000);
})
.then(() => {
  console.log("green color was completed");
  return changeColor("blue", 1000);
})
.then(() => {
  console.log("blue color was completed");
});


// changeColor("red", 1000, () => {    // for this callback hell to this also for revison so for learning to see how it works.
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// changeColor("red", 1000);// For one by  one show dependency means color two depend on color one and line by line it's work
// changeColor("orange", 2000);
// changeColor("green", 3000);

// setTimeout( () => {     // In this we confuse cause after 1s we have to think again and again that after what second 
//   h1.style.color = "red";  // we have adjust so for that we have function which we use here.
// }, 1000);

// setTimeout( () => {
//   h1.style.color = "orange";
// }, 2000);

// setTimeout( () => {
//   h1.style.color = "green";
// }, 3000);

// callback hell for one more exmaple 
// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// saveToDb(
//   "apna college",
//   () => {
//     console.log("success : your data was saved");
//     saveToDb(
//       "hello world",
//       () => {
//         console.log("success2: data2 saved");
//         saveToDb(
//           "shradha",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection. data not saved)");
//   }
// );

// solve call back hell for use promise
function savetoDb(data) {
  return new Promise((resolve, reject) => {  // here we use success and failure but we use promise so we have to use resolve and reject.
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
}

// savetoDb("apna college")// req = promise object we are using variable of request instead of using direct call back.
// .then(() => {
//   console.log("promise was resolved");
//   // console.log(request);
// })
// .catch(() => {
//   console.log("promise was rejeced");
//   // console.log(request);
// });

// // let request = savetoDb("apna college"); // req = promise object we are using variable of request instead of using direct call back.
// // request.then(() => {

// now we see the improved version of promises
savetoDb("apna college")
.then((result) => {
  console.log("data1 saved");
  console.log("result of promise:", result);
  return savetoDb("helloworld");
})
.then((result) => {
  console.log("data2 saved");
  console.log("result of promise:", result);
  return savetoDb("shradha");
})
.then((result) => {
  console.log("data3 saved");
  console.log("result of promise:", result);
  // If we want to add here data 4 then we write 
  // again retun savetoDb("which we want to add");
})
.catch((error) => {
  console.log("promise was rejected");
  console.log("error of promise:", error);
});

//async function is defualt to create a promice so when we don't have to mention the promice 
//statement and it's clear and compact version to write asyncronous function code.
async function greet() {
  throw "404 page not found";
  return "hello!";
}

greet()
.then((result) => {
  console.log("promise was resolved");
  console.log("result was :", result);
})
.catch((err) => {
  console.log("promise was rejected with err :", err);
});

let demo = async () => {
  return 5;
};
console.log(demo());

// This is for await async function which make more compact code and avoid callback hell.
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo1() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
console.log(demo1());

// So now we completed the call stake ,Breakpoints,single threaded, callback  Hell, solve Hell , then-catch and by promises, and also we last in we use 
//how to solve hell good way with compact version to solve and make it more clear with async with await so that's we revise so we need this all.


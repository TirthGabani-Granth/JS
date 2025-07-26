// This is for search college by country.
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colArr = await getColleges(country);
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (col of colArr) {
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }
// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (e) {
//         console.log("error : ", e);
//         return [];
//     }
// }

// And now we search college by stat- province by so this is the code.
let url = "http://universities.hipolabs.com/search?country=India";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let colArr = await getColleges();
    let finalArr = [];

    for (let col of colArr) {
        if (col["state-province"] && col["state-province"].includes(state)) {
            finalArr.push(col);
        }
    }

    show(finalArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for (col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }

    if (colArr.length == 0) {
        let li = document.createElement("li");
        li.innerText = "No colleges found for this state.";
        list.appendChild(li);
    }
}

async function getColleges() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}

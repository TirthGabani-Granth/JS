//step 1 = keypres - start a game any key plees
//step 2 = random btnflash + level 1 start update
//step 3 = user wait and user press btn then user seq match with game seq [] = user seq track user seq restart
//btn press we add [Event listener]
//check same sequence then level up or not then game over
let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let highScore = localStorage.getItem("highScore") || 0;
let scoreDisplay = document.createElement("h3");
scoreDisplay.innerText = `High Score: ${highScore}`;
document.body.appendChild(scoreDisplay);

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp () {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level : ", level);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        } 
    } else {
        if (level > highScore) {
            highScore = level;
            localStorage.setItem("highScore", highScore);
            scoreDisplay.innerText = `High Score: ${highScore}`;
        }
        h2.innerHTML = `Game Over! your score was<b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);// we can remove this cause this print all detail about button.
    let btn =this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
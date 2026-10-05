let gameSeq = [];
let UserSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress" ,function() {
    if(started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 250);

}

function levelUp() {
    UserSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
  // random color genrate
  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if(UserSeq[idx] === gameSeq[idx]) {
        if(UserSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function () {
        document.querySelector("body").style.backgroundColor = 'white';
        },150)
        reset();
    }
}


function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    UserSeq.push(userColor);


    checkAns(UserSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    gameSeq = [];
    UserSeq = [];
    started = false;
    level = 0;

}
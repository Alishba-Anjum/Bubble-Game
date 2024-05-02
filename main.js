let timer = 30;
let score = 0;
let hitrn = 0;

function makeBubbles() {
  let bubbles = "";
  for (let i = 1; i <= 108; i++) {
    let number = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${number}</div>`;
  }
  document.querySelector(".bottom").innerHTML = bubbles;
}
let hit = document.querySelector("#hitval");
function getHit() {
  hitrn = Math.floor(Math.random() * 10);
  hit.textContent = hitrn;
}

function runTimer() {
  let intTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      bottomBubble.innerHTML = `<h1> Game over! <br> your score is "${score}"</h1>`;
      clearInterval(intTimer);
    }
  }, 1000);
}

let incScore = document.querySelector("#scoreval");
function increaseScore() {
  incScore.textContent = score;
  score += 10;
}

let bottomBubble = document.querySelector(".bottom");
bottomBubble.addEventListener("click", function (dets) {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubbles();
    getHit();
  }
});

getHit();
runTimer();
makeBubbles();
increaseScore();

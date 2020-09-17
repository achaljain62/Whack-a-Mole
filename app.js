const score = document.querySelector("#score");
const timeleft = document.querySelector("#timeleft");
const mole = document.querySelectorAll(".mole");
const start = document.querySelector("#start");
let square = document.querySelectorAll(".square");

let result = 0;
let countdown = 60;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 12)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}

square.forEach((Element) => {
  Element.addEventListener("mouseup", () => {
    if (Element.id === hitPosition) {
      result++;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timer = null;
  timer = setInterval(() => {
    randomSquare();
    if (countdown === 0) {
      clearInterval(timer);
      countdown = 60;
    }
  }, 700);
}

function begin() {
  moveMole();
  let timer = setInterval(() => {
    countdown--;
    timeleft.textContent = countdown;
    if (countdown === 0) {
      clearInterval(timer);
      alert("Game Over! Your Score is " + result);
      start.disabled = false;
    }
  }, 1000);
  score.textContent = 0;
  start.disabled = true;
}

start.addEventListener("click", begin);

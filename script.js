const target = document.getElementById("target");
const restartButton = document.getElementById("restart");
const scoreValue = document.getElementById("score-value");

let score = 0;
let intervalId;

target.addEventListener("click", () => {
  score++;
  scoreValue.textContent = score;

  target.style.width =
    parseInt(window.getComputedStyle(target).getPropertyValue("width")) * 0.95 + "px";
  target.style.height =
    parseInt(window.getComputedStyle(target).getPropertyValue("height")) * 0.95 + "px";

  moveTarget();
  resetInterval();
});

document.addEventListener("click", (event) => {
  if (event.target !== target) {
    gameOver();
  }
});

function moveTarget() {
  const newX = Math.random() * (window.innerWidth - target.offsetWidth);
  const newY = Math.random() * (window.innerHeight - target.offsetHeight);

  target.style.left = newX + "px";
  target.style.top = newY + "px";
}

function gameOver() {
  target.style.display = "none";
  restartButton.style.display = "block";
}

function restartGame() {
  score = 0;
  scoreValue.textContent = score;
  target.style.display = "block";
  target.style.width = "100px";
  target.style.height = "100px";
  restartButton.style.display = "none";
  moveTarget();
  resetInterval();
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(moveTarget, 2000);
}

moveTarget();
intervalId = setInterval(moveTarget, 2000);

restartButton.addEventListener("click", (event) => {
  event.stopPropagation();
  restartGame();
});

let countLeft = 0;
let countRight = 0;

let scoreLeft = document.getElementById("score-l");
let scoreRight = document.getElementById("score-r");

function increment1l() {
  countLeft += 1;
  scoreLeft.textContent = countLeft;
}

function increment2l() {
  countLeft += 2;
  scoreLeft.textContent = countLeft;
}

function increment3l() {
  countLeft += 3;
  scoreLeft.textContent = countLeft;
}

function increment1r() {
  countRight += 1;
  scoreRight.textContent = countRight;
}

function increment2r() {
  countRight += 2;
  scoreRight.textContent = countRight;
}

function increment3r() {
  countRight += 3;
  scoreRight.textContent = countRight;
}

function reset() {
  countLeft = 0;
  countRight = 0;
  scoreRight.textContent = 0;
  scoreLeft.textContent = 0;
}

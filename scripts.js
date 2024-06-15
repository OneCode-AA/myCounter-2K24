const display = document.getElementById("count-result");
const addCountBtn = document.getElementById("count-btn");
const resetBtn = document.getElementById("reset-btn");
const ledOn = document.getElementById("led-btn");

addCountBtn.addEventListener("click", addCount);
resetBtn.addEventListener("click", reset);
ledOn.addEventListener("click", ledON);

let value = 0;
function addCount() {
  value += 1;
  display.textContent = value;
}


function reset() {
  value = 0;
  display.textContent = value;
}

function ledON() {
  display.classList.toggle("led-on");
}

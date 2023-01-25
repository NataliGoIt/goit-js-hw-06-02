const container = document.querySelector("#counter"),
  text = document.querySelector("#value"),
  prevBtn = document.querySelector('button[data-action="decrement"]'),
  nextBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
prevBtn.addEventListener("click", prev);
function prev() {
  counterValue -= 1;
  text.innerHTML = counterValue;
}
nextBtn.addEventListener("click", next);
function next() {
  counterValue += 1;
  text.innerHTML = counterValue;
}

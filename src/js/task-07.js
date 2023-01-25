const inputSize = document.querySelector("#font-size-control"),
  textEl = document.querySelector("#text");
inputSize.addEventListener("input", changeSize);
function changeSize() {
  textEl.style.fontSize = `${inputSize.value}px`;
}

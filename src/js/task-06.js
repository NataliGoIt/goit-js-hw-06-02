const inputEl = document.querySelector("#validation-input"),
  inputLength = Number(inputEl.dataset.length);
console.log(inputLength);
inputEl.addEventListener("blur", inputAction);
function inputAction(e) {
  let inputText = e.currentTarget.value;
  if (inputText.length === inputLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}

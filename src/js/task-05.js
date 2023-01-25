const inputName = document.querySelector("#name-input"),
  inputValue = document.querySelector("#name-output");
inputName.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    return (inputValue.textContent = "Anonymous");
  }
  inputValue.textContent = e.currentTarget.value;
});

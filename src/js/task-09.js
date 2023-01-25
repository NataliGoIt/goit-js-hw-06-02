const btnChandgeCokor = document.querySelector(".change-color"),
  spanColor = document.querySelector(".color"),
  body = document.querySelector("body");
console.log(body);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChandgeCokor.addEventListener("click", changeColor);
function changeColor() {
  const hexColor = getRandomHexColor();
  spanColor.textContent = hexColor;
  body.style.backgroundColor = hexColor;
  console.log(spanColor);
}

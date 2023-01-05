const elItem = document.querySelectorAll(".item");

console.log("Number of categories:", elItem.length);
elItem.forEach((index) => {
  console.log("Category:", index.querySelector("h2").textContent);
  console.log("Elements:", index.querySelectorAll("li").length);
});

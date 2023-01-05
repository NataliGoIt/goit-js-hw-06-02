const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientEl = document.querySelector("#ingredients");
ingredients.forEach((index) => {
  const creatItem = document.createElement("li");
  creatItem.textContent = index;
  creatItem.classList.add(".item");
  ingredientEl.append(creatItem);
});
console.log(ingredientEl);

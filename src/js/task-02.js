const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const elements = [];

ingredients.forEach((ingridient) => {
  const element = document.createElement("li");
  element.textContent = ingridient;
  element.classList.add("item");
  elements.push(element);
});
list.append(...elements);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector("input");
const btnCreate = document.querySelector("[data-action='create']");
const btnDestroy = document.querySelector("[data-action='destroy']");
const divRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.classList.add("box");
    element.style.width = 30 + 10 * i + "px";
    element.style.height = 30 + 10 * i + "px";
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }
  divRef.append(...elements);
};

const getValue = () => {
  const value = numberInput.value;

  if (!value) return;
  createBoxes(value);
};

const destroyBoxes = () => {
  numberInput.value = "";
  divRef.innerHTML = "";
};

btnCreate.addEventListener("click", getValue);
btnDestroy.addEventListener("click", destroyBoxes);

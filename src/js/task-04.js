const spanValue = document.querySelector("#value");
let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const handleClickPlus = () => (spanValue.textContent = counterValue += 1);
const handleClickMinus = () => (spanValue.textContent = counterValue -= 1);

btnDecrement.addEventListener("click", handleClickMinus);
btnIncrement.addEventListener("click", handleClickPlus);

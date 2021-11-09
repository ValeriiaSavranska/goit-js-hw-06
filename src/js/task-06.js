const textInput = document.querySelector("#validation-input");
const dataLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener("blur", (event) => {
  event.target.classList.add("invalid");

  if (textInput.value.length === Number(dataLength.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
});

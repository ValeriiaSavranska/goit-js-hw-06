const textInput = document.querySelector("#validation-input");
const dataLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener("blur", (event) => {
  const classEdit = (addClass, removeClass) => {
    event.target.classList.add(addClass);
    event.target.classList.remove(removeClass);
  };
  classEdit("invalid");

  if (textInput.value.length === Number(dataLength.dataset.length)) {
    classEdit("valid", "invalid");
  }
});

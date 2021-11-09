const formRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const emailFormRef = formRef.elements.email;
  const passwordFormRef = formRef.elements.password;
  const newObj = {};

  if (emailFormRef.value === "" || passwordFormRef.value === "") {
    const message = "Please fill in all the fields!";
    alert(message);
    return;
  }

  newObj.email = emailFormRef.value;
  newObj.password = passwordFormRef.value;
  console.log(newObj);

  formRef.reset();
};

formRef.addEventListener("submit", handleSubmit);

const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const formValue = {
    email: email.value,
    password: password.value,
  };
  console.log(formValue);
  form.reset();
}

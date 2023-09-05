const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  const data = {
    email: emailInput.value,
    password: passwordInput.value}
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені!");
  }
else {console.log(data);
        form.reset()}
    })

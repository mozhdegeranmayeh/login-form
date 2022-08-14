const form = document.querySelector("form");
form.addEventListener("submit", validate);

function validate(event) {
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");

  const email = document.getElementById("email");
  const emailerror = document.getElementById("emailerror");
  const simpleEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const usererror = document.getElementById("usererror");
  const passerror = document.getElementById("passerror");
  usererror.textContent = "";
  passerror.textContent = "";

  emailerror.textContent = "";

  if (user.value.length < 5 || user.value.length > 15) {
    usererror.textContent = "between 5 to 15 carector";
    event.preventDefault();
  }

  if (pass.value.length < 6 || pass.value.length > 20) {
    passerror.textContent = "between 6 to 20 carector";
    event.preventDefault();
  }

  if (!simpleEmail.test(email.value)) {
    emailerror.textContent = "please ensert a valid email. ";
    event.preventDefault();
  }
}

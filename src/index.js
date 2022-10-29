import "./style.scss";

const emailInput = document.querySelector("#emailInput");
const subscribeForm = document.querySelector("#subscribeForm");

const validateEmail = function (target) {
  const regex =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return regex.test(target);
};

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const invalidEmail = document.querySelector(".invalidEmail");
  if (validateEmail(emailInput.value)) {
    invalidEmail.style.display = "none";
  } else {
    invalidEmail.style.display = "block";
  }
});

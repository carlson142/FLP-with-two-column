const cta1 = document.getElementById("cta1");
const input1 = document.getElementById("email");
const error = document.querySelector(".error");

const cta2 = document.getElementById("cta2");
const input2 = document.getElementById("email2");
const error2 = document.getElementById("error2");
////////////////////////////////////////////////////
function errorDisplay(input, error) {
  let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value === "" || !input.value.match(emailValidation)) {
    error.style.opacity = 1;
    input.style.border = "2px solid var(--color-secondary-red)";
  } else {
    error.style.opacity = 0;
    input.style.border = "2px solid var(--color-secondary-moderate-cyan)";
  }
}
///////////////////////////////////////////////////

cta1.addEventListener("click", (e) => {
  errorDisplay(input1, error);
});

cta2.addEventListener("click", (e) => {
  errorDisplay(input2, error2);
});

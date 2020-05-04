const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  console.log("submit");
  e.preventDefault();
  checkRequired([firstname, lastname, email, password]);
  checkEmail(email);
  checkNumberInName(firstname);
  checkNumberInName(lastname);
  checkPasswordMatch(password);
});

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    console.log(input);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not Valid");
  }
}

function checkNumberInName(input) {
  const re = /^([^0-9]*)$/;
  if (input.value.trim() === "") {
    showError(input, `${getFieldName(input)} is required`);
  } else if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Name should not contain numbers");
  }
}

function checkPasswordMatch(input) {
  const re = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Password do not meet minimum requirement");
  }
}

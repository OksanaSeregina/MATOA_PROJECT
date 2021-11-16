//Burger menu

let burgerMenu = document.querySelector("#burger");
let menuList = document.querySelector(".header-menu");
let hideSearch = document.querySelector(".hide-search");
let hideUser = document.querySelector(".hide-user");
let closeBtn = document.querySelector("#close");

function openBurger() {
  burgerMenu.style.display = "none";
  menuList.classList.add("show");
  hideSearch.innerHTML = "<span>Search</span>";
  hideUser.style.display = "none";
  setTimeout('closeBtn.style.display = "block"', 1000);
}

function closeBurger() {
  setTimeout('burgerMenu.style.display = "block"', 500);
  menuList.classList.remove("show");
  closeBtn.style.display = "none";
  setTimeout('hideUser.style.display = "inline-block"', 1000);
  setTimeout(
    `hideSearch.innerHTML ='<img src="./images/Search.png" alt="search"/>'`,
    1000
  );
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

//Valid form

let inputFName = document.querySelector("input[name='fName']");
let inputEmail = document.querySelector("input[name='email']");
let inputTel = document.querySelector("input[name='tel']");
let inputDelivery = document.querySelector("input[name='delivery']");
let inputZipCode = document.querySelector("input[name='zipCode']");
let form = document.querySelector(".payment-details");
let submitForm = document.querySelector(".place-my-order");

let inputsRequired = document.querySelectorAll("[data-type='required']");
let errors = {};

// Set error for all required fields
for (let input of inputsRequired) {
  let key = input.name;
  errors[key] = true;
}

function inputHandler(event) {
  let key = event.target.name;
  let currentData = this.value;
  let errorMesage = document.querySelector(`span[data-error='${key}']`);

  localStorage.setItem(`${key}`, currentData);

  // required validator
  let isValid = currentData.charAt(0) !== " " && currentData.length;
  let letters = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

  if (!isValid) {
    errorMesage.classList.add("error");
    errors[key] = true;
  } else {
    errorMesage.classList.remove("error");
    errors[key] = false;
  }

  if (currentData === inputEmail.value) {
    if (!letters.test(inputEmail.value)) {
      errorMesage.classList.add("error");
      errors[key] = true;
    } else {
      errorMesage.classList.remove("error");
      errors[key] = false;
    }
  }
}

function submitHandler(event) {
  let hasFormError = false;
  let input = null;

  event.preventDefault();
  // check and show all errors on submit button click
  for (let key in errors) {
    if (errors[key]) {
      let errorMesage = document.querySelector(`span[data-error='${key}']`);
      errorMesage.classList.add("error");
      hasFormError = true;

      // set first input with error and scroll to
      if (!input) {
        input = document.querySelector(`input[name='${key}']`);
        input.focus();
        input.scrollIntoView();
      }
    }
  }

  if (!hasFormError) {
    window.location.href = "./payment.html#my-id5";
  }
}

inputFName.addEventListener("input", inputHandler);
inputFName.addEventListener("blur", inputHandler, { once: true });

inputEmail.addEventListener("input", inputHandler);
inputEmail.addEventListener("blur", inputHandler, { once: true });

inputTel.addEventListener("input", inputHandler);
inputTel.addEventListener("blur", inputHandler, { once: true });

inputDelivery.addEventListener("input", inputHandler);
inputDelivery.addEventListener("blur", inputHandler, { once: true });

inputZipCode.addEventListener("input", inputHandler);
inputZipCode.addEventListener("blur", inputHandler, { once: true });

submitForm.addEventListener("click", submitHandler);

//Local storage

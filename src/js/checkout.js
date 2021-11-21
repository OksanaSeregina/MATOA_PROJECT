/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-escape */
/* eslint-disable no-implied-eval */
import { getModal } from "./shared";
import "../style/global.scss";
import "../style/checkout.scss";

// Burger menu

const burgerMenu = document.querySelector("#burger");
const menuList = document.querySelector(".header-menu");
const hideSearch = document.querySelector(".hide-search");
const hideUser = document.querySelector(".hide-user");
const closeBtn = document.querySelector("#close");

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
    setTimeout(`hideSearch.innerHTML ='<img src="./images/Search.png" alt="search"/>'`, 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

// Valid form

const inputFName = document.querySelector("input[name='fName']");
const inputEmail = document.querySelector("input[name='email']");
const inputTel = document.querySelector("input[name='tel']");
const inputDelivery = document.querySelector("input[name='delivery']");
const inputZipCode = document.querySelector("input[name='zipCode']");
const form = document.querySelector(".payment-details");
const submitForm = document.querySelector(".place-my-order");

const inputsRequired = document.querySelectorAll("[data-type='required']");
const errors = {};

// Set error for all required fields
for (const input of inputsRequired) {
    const key = input.name;
    errors[key] = true;
}

function inputHandler(event) {
    const key = event.target.name;
    const currentData = this.value;
    const errorMesage = document.querySelector(`span[data-error='${key}']`);

    localStorage.setItem(`${key}`, currentData);

    // required validator
    const isValid = currentData.charAt(0) !== " " && currentData.length;
    const nameEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const numbTel = /^\d[\d\(\)\ -]{4,14}\d$/;

    if (!isValid) {
        errorMesage.classList.add("error");
        errors[key] = true;
    } else {
        errorMesage.classList.remove("error");
        errors[key] = false;
    }

    if (currentData === inputEmail.value) {
        if (!nameEmail.test(inputEmail.value)) {
            errorMesage.classList.add("error");
            errors[key] = true;
        } else {
            errorMesage.classList.remove("error");
            errors[key] = false;
        }
    }

    if (currentData === inputTel.value) {
        if (!numbTel.test(inputTel.value)) {
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
    for (const key in errors) {
        if (errors[key]) {
            const errorMesage = document.querySelector(`span[data-error='${key}']`);
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

getModal();

// Local storage

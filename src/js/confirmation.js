/* eslint-disable no-implied-eval */
import { getModal } from "./shared";
import "../style/global.scss";
import "../style/checkout.scss";
import "../style/payment.scss";
import "../style/confirmation.scss";

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

getModal();

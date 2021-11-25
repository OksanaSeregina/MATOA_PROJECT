/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-implied-eval */
import { Cart, Detail } from "./shared";
import "../style/global.scss";
import "../style/checkout.scss";
import "../style/payment.scss";

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
    setTimeout(() => {
        closeBtn.style.display = "block";
    }, 1000);
}

function closeBurger() {
    setTimeout(() => {
        burgerMenu.style.display = "block";
    }, 500);
    menuList.classList.remove("show");
    closeBtn.style.display = "none";
    setTimeout(() => {
        hideSearch.innerHTML = '<img src="./images/Search.png" alt="search"/>';
    }, 1000);
    setTimeout(() => {
        hideUser.style.display = "inline-block";
    }, 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

// Time now
const getTimeNow = () => {
    const justNow = new Date();

    document.querySelector(
        '[data-time="now"]'
    ).textContent = `${justNow.toLocaleDateString()} ${justNow.toLocaleTimeString()}`;
};

// Local Storage
const getInfoInput = () => {
    const textOrder = document.getElementsByClassName("text-info-input");

    for (const elem of textOrder) {
        for (const key in localStorage) {
            const data = key;

            if (elem.dataset.info === data) {
                elem.textContent = localStorage.getItem(data);
            }
        }
    }
    getTimeNow();
};

const getInfoItems = () => {
    const allCartItems = JSON.parse(localStorage.getItem("cart"));
    const infoInputItems = document.querySelector('[data-items="cart"]');
    allCartItems.forEach((item) => {
        infoInputItems.innerHTML += `
      <h2 class="text-info-input">${item.name}</h2>
      <p class="descr-info-input">${item.count} x IDR ${item.bigPrice}</p>
      `;
    });
};

const getZipIndex = () => {
    const shipAddr = document.querySelector('[data-info="delivery"]');
    const zip = localStorage.getItem("zipCode");

    shipAddr.textContent = `${shipAddr.textContent}, CA ${zip}`;
};

getInfoInput();
getInfoItems();
getZipIndex();

const cart = new Cart();
cart.init();

const detail = new Detail('[data-element="detail"]');
detail.init();

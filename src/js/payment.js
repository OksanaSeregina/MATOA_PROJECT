/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-implied-eval */
import { getModal } from "./shared";
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

getInfoInput();

// Timer

const startTimer = (timer, display) => {
    const timer1 = setInterval(() => {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        display.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            display.textContent = `Time is up`;
            clearInterval(timer1);
        }
    }, 1000);
};

document.addEventListener("DOMContentLoaded", startTimer(720, document.querySelector(".time")));

getModal();

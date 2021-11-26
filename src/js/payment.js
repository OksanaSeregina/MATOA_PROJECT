import { Cart, Detail } from "./shared";
import "../style/global.scss";
import "../style/checkout.scss";
import "../style/payment.scss";

const getFromStorage = () => JSON.parse(localStorage.getItem("order")) || {};
const order = getFromStorage();

const cart = new Cart();

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
        for (const key in order) {
            if (elem.dataset.info === key) {
                elem.textContent = order[key];
            }
        }
    }
    getTimeNow();
};

const getInfoItems = () => {
    const infoInputItems = document.querySelector('[data-items="cart"]');
    cart.products.forEach((item) => {
        infoInputItems.innerHTML += `
      <h2 class="text-info-input">${item.name}</h2>
      <p class="descr-info-input">${item.count} x IDR ${item.bigPrice}</p>
      `;
    });
};

const getZipIndex = () => {
    const shipAddr = document.querySelector('[data-info="delivery"]');
    shipAddr.textContent = `${shipAddr.textContent}, CA ${order.zipCode}`;
};

getInfoInput();
getZipIndex();

const detail = new Detail('[data-element="detail"]', cart);
cart.init();
detail.init();
getInfoItems();

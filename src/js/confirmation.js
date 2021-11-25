/* eslint-disable no-implied-eval */
import { Cart } from "./shared";
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

const getInfoItems = () => {
    const allCartItems = JSON.parse(localStorage.getItem("cart"));
    const infoInputItems = document.querySelector(".info-order-confr");
    allCartItems.forEach((item) => {
        infoInputItems.innerHTML += `
      <h2 class="text-confr">${item.name}</h2>
      <p class="descr-confr">${item.count} x IDR ${item.bigPrice}</p>
    `;
    });
};

const getSubtotal = () => {
    const valueCourier = document.querySelector('[data-order="courier"]');
    const currentCourier = localStorage.getItem("courier");
    valueCourier.textContent = currentCourier;

    const valueSubtotal = document.querySelector('[data-order="subtotal"]');
    const carrent = localStorage.getItem("subtotal");
    const subtCarrent = carrent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    valueSubtotal.textContent = `Rp ${subtCarrent}`;

    const valueGrandTotal = document.querySelector('[data-order="grand"]');
    const carrentGrand = localStorage.getItem("grandtotal");
    const carrentGrandTotal = carrentGrand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    valueGrandTotal.textContent = `Rp ${carrentGrandTotal}`;

    const address = document.querySelector(".text-info-input");
    const currentAddress = localStorage.getItem("delivery");
    const zip = localStorage.getItem("zipCode");
    address.textContent = `${currentAddress}, CA ${zip}`;
};

getInfoItems();
getSubtotal();

const cart = new Cart();
cart.init();

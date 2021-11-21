/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-implied-eval */
import { getModal } from "./shared";
import { Carousel } from "./components";
import "../style/global.scss";

document.querySelector("#item1").onclick = function () {
    document.querySelector("#text1").classList.toggle("hide");
};

document.querySelector("#item2").onclick = function () {
    document.querySelector("#text2").classList.toggle("hide");
};

document.querySelector("#item3").onclick = function () {
    document.querySelector("#text3").classList.toggle("hide");
};

document.querySelector("#item4").onclick = function () {
    document.querySelector("#text4").classList.toggle("hide");
};

// Burger menu

const burgerMenu = document.querySelector("#burger");
const menuList = document.querySelector(".header-menu");
const hideImg = document.querySelector(".hide");
const hideSearch = document.querySelector(".hide-search");
const hideUser = document.querySelector(".hide-user");
const closeBtn = document.querySelector("#close");

function openBurger() {
    burgerMenu.style.display = "none";
    menuList.classList.add("show");
    hideImg.style.position = "static";
    hideSearch.innerHTML = "<span>Search</span>";
    hideUser.style.display = "none";
    setTimeout('closeBtn.style.display = "block"', 1000);
}

function closeBurger() {
    setTimeout('burgerMenu.style.display = "block"', 500);
    menuList.classList.remove("show");
    closeBtn.style.display = "none";
    setTimeout(`hideSearch.innerHTML ='<img src="./images/Search.png" alt="search"/>'`, 1000);
    setTimeout('hideUser.style.display = "inline-block"', 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

// Open catalog

const showCatalog = (e) => {
    e.preventDefault();
    if (e.target.textContent === "See More") {
        document.querySelector(".show").classList.toggle("hiden-series");
    }
};

document.querySelector(".see__more").addEventListener("click", showCatalog);

// Getting data from the server
const INFO_URL = "http://localhost:3000/profile";

const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`${res.status}!!!!!`);
    }
    return res.json();
};

// Request to the server
const getInfo = async () => {
    const res = await getResourse(INFO_URL);

    return res;
};

const shuffled = (array) => array.sort(() => 0.5 - Math.random());

// Render info carousel
const renderCarousel = async () => {
    const products = await getInfo().then((allProducts) => shuffled(allProducts).slice(0, 5));
    const carousel = new Carousel("[data-element='carousel']", products);
    carousel.render();
};

// Select product Catalog Clock
const selectionProduct = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    if (!id) {
        return;
    }
    window.location = `product.html?id=${e.target.dataset.id}`;
};

document.querySelector(".catalog__clock").addEventListener("click", selectionProduct);

renderCarousel().then(() => getModal());

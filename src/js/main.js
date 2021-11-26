import { Cart, INFO_URL, OFFER_URL } from "./shared";
import { Carousel, Catalog, Offer } from "./components";
import "../style/global.scss";

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
    document.querySelector(".pink").style.zIndex = "-1";
    setTimeout(() => {
        document.querySelector(".pink").style.zIndex = "0";
    }, 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

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

const getOfferInfo = async () => {
    const res = await getResourse(OFFER_URL);

    return res;
};

const shuffled = (array) => array.sort(() => 0.5 - Math.random());

// Carousel
const renderCarousel = async () => {
    const products = await getInfo().then((allProducts) => shuffled(allProducts).slice(0, 5));
    const carousel = new Carousel("[data-element='carousel']", products, cart);
    carousel.init();
};

// Catalog
const renderCatalog = async () => {
    const products = await getInfo();
    const catalog = new Catalog("[data-element='catalog']", products);
    catalog.init();
};

// Offer
const renderOffer = async () => {
    const products = await getOfferInfo().then((allProducts) => shuffled(allProducts).slice(0, 4));
    const offers = new Offer("[data-element='offers']", products, cart);
    offers.init();
};

// Cart count listener
const runCartCountListener = () => {
    const cartCountElement = document.querySelector(".quantity-cart");
    document.addEventListener("cartEvent", () => {
        cartCountElement.textContent = cart.count;
    });
};

runCartCountListener();
cart.init();
renderCarousel();
renderCatalog();
renderOffer();

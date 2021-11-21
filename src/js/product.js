/* eslint-disable no-implied-eval */
import { getQuantity, getModal } from "./shared";
import "../style/global.scss";

const ID = window.location.search.replace("?id=", "");

const burgerMenu = document.querySelector("#burger");
const menuList = document.querySelector(".header-menu");
const leftPproductInfo = document.querySelector(".left__product-info");
const hideSearch = document.querySelector(".hide-search");
const hideUser = document.querySelector(".hide-user");
const closeBtn = document.querySelector("#close");

function openBurger() {
    burgerMenu.style.display = "none";
    menuList.classList.add("show");
    // hideImg.style.position = "static";
    hideSearch.innerHTML = "<span>Search</span>";
    hideUser.style.display = "none";
    setTimeout('closeBtn.style.display = "block"', 1000);
    leftPproductInfo.style.zIndex = "-1";
}

function closeBurger() {
    setTimeout('burgerMenu.style.display = "block"', 500);
    menuList.classList.remove("show");
    closeBtn.style.display = "none";
    setTimeout(`hideSearch.innerHTML ='<img src="./images/Search.png" alt="search"/>'`, 1000);
    setTimeout('hideUser.style.display = "inline-block"', 1000);
    setTimeout('leftPproductInfo.style.zIndex = "0"', 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

// Show descr
const showDescr = (e) => {
    e.preventDefault();

    if (e.target.textContent === "Detail") {
        document.querySelector(".descr__detail").classList.remove("hide-descr");
        document.querySelector(".selected-link").classList.remove("hide-descr");

        if (e.target.tagName === "SPAN") {
            e.target.classList.add("color-red");
        }
    }
};

document.querySelector(".detail__product").addEventListener("click", showDescr);

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
const findProduct = async () => {
    const products = await getResourse(INFO_URL);
    return products.find((product) => product.id === ID);
};

// Render info product
const renderProductInfo = async () => {
    const product = await findProduct();
    const template = `
    <div class="left__product-info">
          <div class="mini__clock">
            <div>
              <a href="#"><img src="./images/Clock_mini1.png" alt="clock" /></a>
            </div>
            <div>
              <a href="#"><img src="./images/Clock_mini2.png" alt="clock" /></a>
              <span class="filter"></span>
            </div>
            <div>
              <a href="#"><img src="./images/Clock_mini3.png" alt="clock" /></a>
              <span class="filter"></span>
            </div>
            <div>
              <a href="#"><img src="./images/Clock_mini4.png" alt="clock" /></a>
              <span class="filter"></span>
            </div>
          </div>
          <div class="one__clock">
            <img src=${product.image} alt="clock" />
          </div>
        </div>

        <div class="right__product-info">
          <div class="info__model">
            <h1>${product.name}</h1>
            <p class="old__price">${product.smallPrice === undefined ? "" : product.smallPrice}</p>
            <p class="new__price">${product.bigPrice}</p>
            <p class="choose">Choose Model</p>
            <img class="model" src="./images/Color.png" alt="color" />
            <img class="model" src="./images/Color2.png" alt="color" />

            <div class="button__quantity">
              <div class="quantity">
                <div class="choose__quantity">
                  <a class="item" data-action="remove" href="#"
                    ><i class="fas fa-minus"></i
                  ></a>
                </div>
                <span class="one">1</span>
                <div class="choose__quantity">
                  <a class="item" data-action="add" href="#"
                    ><i class="fas fa-plus"></i
                  ></a>
                </div>
              </div>
              <div class="arrow__pink">
                <div class="button__pink">
                  <div class="button1">
                    <a class="add__cart" href="#"
                      ><i class="fas fa-cart-plus"></i>Add to cart</a
                    >
                  </div>
                  <div class="button2">
                    <a class="cicil" href="#"
                      ><img src="./images/Cicil.png" alt="cicil"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;

    const block = document.querySelector(".all_product-info");
    block.innerHTML = "";
    block.innerHTML = template;
};

renderProductInfo().then(() => {
    getQuantity();
    getModal();
});

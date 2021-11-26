import { Cart } from "./shared";
import "../style/global.scss";

const ID = window.location.search.replace("?id=", "");
const INFO_URL = "http://localhost:3000/profile";
const CART = new Cart();

const module = async () => {
    function getProduct() {
        return fetch(`${INFO_URL}/${ID}`).then((res) => {
            if (!res.ok) {
                throw new Error(`${res.status}!!!!!`);
            }
            return res.json();
        });
    }
    const PRODUCT = await getProduct();

    const burgerMenu = document.querySelector("#burger");
    const menuList = document.querySelector(".header-menu");
    const leftPproductInfo = document.querySelector(".left__product-info");
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
        leftPproductInfo.style.zIndex = "-1";
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
        document.querySelector(".left__product-info").style.zIndex = "-1";
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

    // Render info product
    const renderProductInfo = async () => {
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
              <img src=${PRODUCT.image} alt="clock" />
            </div>
          </div>

          <div class="right__product-info">
            <div class="info__model">
              <h1>${PRODUCT.name}</h1>
              <p class="old__price">${PRODUCT.smallPrice === undefined ? "" : PRODUCT.smallPrice}</p>
              <p class="new__price">${PRODUCT.bigPrice}</p>
              <p class="choose">Choose Model</p>
              <img class="model" src="./images/Color.png" alt="color" />
              <img class="model" src="./images/Color2.png" alt="color" />

              <div class="button__quantity">
                <div class="arrow__pink">
                  <div class="button__pink">
                    <div class="button1">
                      <a data-element="add-cart" class="add__cart" href="#"
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

    renderProductInfo();

    document.querySelector(".product__info").addEventListener("click", (e) => {
        if (e.target.dataset.element === "add-cart") {
            CART.add(PRODUCT);
        }
    });

    // Cart count
    const runCartCountListener = () => {
        const cartCountElement = document.querySelector(".quantity-cart");
        document.addEventListener("cartEvent", () => {
            cartCountElement.textContent = CART.count;
        });
    };
    runCartCountListener();
    CART.init();
};
module();

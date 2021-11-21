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

//Burger menu

let burgerMenu = document.querySelector("#burger");
let menuList = document.querySelector(".header-menu");
let hideImg = document.querySelector(".hide");
let hideSearch = document.querySelector(".hide-search");
let hideUser = document.querySelector(".hide-user");
let closeBtn = document.querySelector("#close");

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
  setTimeout(
    `hideSearch.innerHTML ='<img src="./images/Search.png" alt="search"/>'`,
    1000
  );
  setTimeout('hideUser.style.display = "inline-block"', 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

//Open catalog

const showCatalog = (e) => {
  e.preventDefault();
  if (e.target.textContent === "See More") {
    document.querySelector(".show").classList.toggle("hiden-series");
  }
};

document.querySelector(".see__more").addEventListener("click", showCatalog);

//Getting data from the server
let INFO_URL = "http://localhost:3000/profile";

const getResourse = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`${res.status}!!!!!`);
  }
  return res.json();
};

//Request to the server
const getInfo = async () => {
  const res = await getResourse(INFO_URL);

  return res;
};

const shuffled = (array) => array.sort(() => 0.5 - Math.random());

//Render info carousel
const render = async () => {
  const products = await getInfo().then((allProducts) =>
    shuffled(allProducts).slice(0, 5)
  );
  const carouselItems = document.querySelector(".carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");
  carouselItems.innerHTML = "";
  carouselIndicators.innerHTML = "";

  for (let product of products) {
    let carouselIndicator;
    if (products[0] === product) {
      carouselIndicator = `<button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to="${products.indexOf(product)}"
                              class="active"
                              aria-current="true"
                              aria-label=""
                            ></button>`;
    } else {
      carouselIndicator = `<button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to="${products.indexOf(product)}"
                              aria-label=""
                            ></button>`;
    }

    const carouselItem = `
    <div class="carousel-item ${
      products[0] === product ? "active" : ""
    }" data-bs-interval="2000">
          <img src=${product.image} class="d-block w-36" alt="clock" />
          <div class="carousel-caption d-none d-md-block">
            <h1 class="way">${product.name}</h1>
            <hr class="under-way" />
            <p class="text__pink">${product.detail}</p>
            <h3 class="text__discover">Discover</h3>
            <hr class="discover" />
            <div class="button__pink">
              <div class="button1">
                <a data-id=${product.id} class="add__cart" href="#"
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
        `;

    carouselIndicators.innerHTML += carouselIndicator;
    carouselItems.innerHTML += carouselItem;
  }
};

render();

//Select product Catalog Clock
const selectionProduct = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  if (!id) {
    return;
  }
  window.location = `product.html?id=${e.target.dataset.id}`;
};

document
  .querySelector(".catalog__clock")
  .addEventListener("click", selectionProduct);

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

//Render info

const renderInfo = async () => {
  const data = await getInfo();
  //console.log(data);
  for (let key in data) {
    console.log(data[key]);
    document.querySelector(".carousel-inner").innerHTML = "";
    document.querySelector(".carousel-inner").innerHTML += `
    <div class="carousel-item active" data-bs-interval="10000">
    <img src=${data[key].image} class="d-block w-36" alt="clock" />
    <div class="carousel-caption d-none d-md-block">
      <h1 class="way">${data[key].name}</h1>
      <hr class="under-way" />
      <p class="text__pink">${data[key].detail}</p>
      <h3 class="text__discover">Discover</h3>
      <hr class="discover" />
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
  <div class="carousel-item" data-bs-interval="2000">
    <img src=${data[key].image} class="d-block w-36" alt="..." />
    <div class="carousel-caption d-none d-md-block">
      <h1 class="way">${data[key].name}</h1>
      <hr class="under-way" />
      <p class="text__pink">${data[key].detail}</p>
      <h3 class="text__discover">Discover</h3>
      <hr class="discover" />
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
  <div class="carousel-item">
    <img src=${data[key].image} class="d-block w-36" alt="..." />
    <div class="carousel-caption d-none d-md-block carous-text">
      <h1 class="way">${data[key].name}</h1>
      <hr class="under-way" />
      <p class="text__pink">${data[key].detail}</p>
      <h3 class="text__discover">Discover</h3>
      <hr class="discover" />
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
  `;
  }
};

renderInfo();

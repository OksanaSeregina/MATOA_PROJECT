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

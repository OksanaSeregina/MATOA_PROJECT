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
let hideImg1 = document.querySelector(".hide-search");
let hideUser = document.querySelector(".hide-user");
let closeBtn = document.querySelector("#close");

function openBurger() {
  burgerMenu.style.display = "none";
  menuList.classList.add("show");
  hideImg.style.position = "static";
  hideImg1.innerHTML = "<span>Search</span>";
  hideUser.style.display = "none";
  closeBtn.style.display = "block";
}

function closeBurger() {
  burgerMenu.style.display = "block";
  menuList.classList.remove("show");
  closeBtn.style.display = "none";
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

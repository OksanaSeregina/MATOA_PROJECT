//Burger menu

let burgerMenu = document.querySelector("#burger");
let menuList = document.querySelector(".header-menu");
let leftPproductInfo = document.querySelector(".left__product-info");
let hideSearch = document.querySelector(".hide-search");
let hideUser = document.querySelector(".hide-user");
let closeBtn = document.querySelector("#close");

function openBurger() {
  burgerMenu.style.display = "none";
  menuList.classList.add("show");
  //hideImg.style.position = "static";
  hideSearch.innerHTML = "<span>Search</span>";
  hideUser.style.display = "none";
  setTimeout('closeBtn.style.display = "block"', 1000);
  leftPproductInfo.style.zIndex = "-1";
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
  setTimeout('leftPproductInfo.style.zIndex = "0"', 1000);
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

//Show descr

const showDescr = (e) => {
  e.preventDefault();

  if (e.target.textContent === "Detail") {
    document.querySelector(".descr__detail").classList.remove("hide");
    document.querySelector(".selected-link").classList.remove("hide");

    if (e.target.tagName === "SPAN") {
      e.target.classList.add("color-red");
    }
  }
};

document.querySelector(".detail__product").addEventListener("click", showDescr);

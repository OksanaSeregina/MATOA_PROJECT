//Burger menu

let burgerMenu = document.querySelector("#burger");
let menuList = document.querySelector(".header-menu");
let hideSearch = document.querySelector(".hide-search");
let hideUser = document.querySelector(".hide-user");
let closeBtn = document.querySelector("#close");

function openBurger() {
  burgerMenu.style.display = "none";
  menuList.classList.add("show");
  hideSearch.innerHTML = "<span>Search</span>";
  hideUser.style.display = "none";
  setTimeout('closeBtn.style.display = "block"', 1000);
}

function closeBurger() {
  setTimeout('burgerMenu.style.display = "block"', 500);
  menuList.classList.remove("show");
  closeBtn.style.display = "none";
  setTimeout('hideUser.style.display = "inline-block"', 1000);
  setTimeout(
    `hideSearch.innerHTML ='<img src="./images/Search.png" alt="search"/>'`,
    1000
  );
}

burgerMenu.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

//Time now

const getTimeNow = () => {
  let justNow = new Date();

  document.querySelector(
    '[data-time="now"]'
  ).textContent = `${justNow.toLocaleDateString()} ${justNow.toLocaleTimeString()}`;
};

//Local Storage

const getInfoInput = () => {
  let textOrder = document.getElementsByClassName("text-info-input");

  for (let elem of textOrder) {
    for (let key in localStorage) {
      let data = key;

      if (elem.dataset.info === data) {
        elem.textContent = localStorage.getItem(data);
      }
    }
  }
  getTimeNow();
};

getInfoInput();

//Timer

const startTimer = (duration, display) => {
  let timer = duration;
  let minutes = 0;
  let seconds = 0;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    if (minutes < 10) {
      minutes += minutes;
    } else {
      minutes = minutes;
    }

    if (seconds < 10) {
      seconds += seconds;
    } else {
      seconds = seconds;
    }

    display.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      display.textContent = `Time is up`;
    }
  }, 1000);
};

document.addEventListener(
  "DOMContentLoaded",
  startTimer(720, document.querySelector(".time"))
);

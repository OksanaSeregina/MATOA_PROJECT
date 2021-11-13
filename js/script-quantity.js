//let one = document.querySelector(".one");
let sum = 1;

document.querySelector(".quantity").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "fas fa-minus" && sum > 0) {
    sum--;
    document.querySelector(".one").innerText = sum;
  } else if (e.target.className === "fas fa-plus") {
    sum++;
    document.querySelector(".one").innerText = sum;
  }
});

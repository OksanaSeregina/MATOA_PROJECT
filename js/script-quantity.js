let sum = 1;

document.querySelector(".quantity").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.dataset.action === "remove" && sum > 1) {
    sum--;
    document.querySelector(".one").innerText = sum;
  } else if (e.target.dataset.action === "add") {
    sum++;
    document.querySelector(".one").innerText = sum;
  }
});

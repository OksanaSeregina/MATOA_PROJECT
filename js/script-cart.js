let sum = 0;

document.querySelector(".select").addEventListener("click", function (e) {
  let input;

  if (e.target.className === "fas fa-minus") {
    e.preventDefault();
    input = Number(
      e.target.parentElement.parentElement.nextElementSibling.innerText
    );
    if (input > 1) {
      input--;
      e.target.parentElement.parentElement.nextElementSibling.innerText = input;
    }
  } else if (e.target.className === "fas fa-plus") {
    e.preventDefault();
    input = Number(
      e.target.parentElement.parentElement.previousElementSibling.innerText
    );
    input++;
    e.target.parentElement.parentElement.previousElementSibling.innerText =
      input;
  } /* else if (e.target.innerText === "ПОСЧИТАТЬ СУММУ ВСЕХ ТОВАРОВ") {
    currentTotalItems.innerText = sum;
  } */
});

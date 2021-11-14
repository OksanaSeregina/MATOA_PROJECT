let sum = 0;

document.querySelector(".select").addEventListener("click", function (e) {
  let input;
  console.log(e);

  if (e.target.dataset.action === "remove") {
    e.preventDefault();
    input = Number(e.target.parentElement.nextElementSibling.innerText);
    if (input > 1) {
      input--;
      e.target.parentElement.nextElementSibling.innerText = input;
    }
  } else if (e.target.dataset.action === "add") {
    e.preventDefault();
    input = Number(e.target.parentElement.previousElementSibling.innerText);
    input++;
    e.target.parentElement.previousElementSibling.innerText = input;
  } /* else if (e.target.innerText === "ПОСЧИТАТЬ СУММУ ВСЕХ ТОВАРОВ") {
    currentTotalItems.innerText = sum;
  } */
});

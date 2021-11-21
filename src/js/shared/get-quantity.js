export const getQuantity = () => {
    let quantity = 1;
    const parentElement = document.querySelector(".quantity");
    const childElement = document.querySelector(".one");

    const handler = (e) => {
        e.preventDefault();
        if (e.target.dataset.action === "remove" && quantity > 1) {
            quantity -= 1;
            childElement.innerText = quantity;
        } else if (e.target.dataset.action === "add") {
            quantity += 1;
            childElement.innerText = quantity;
        }
    };

    parentElement.addEventListener("click", handler);
};

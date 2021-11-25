/* eslint-disable func-names */
import { cartView } from "./cart.view";
import { cartItemView } from "./cart-item.view";
import "../../../style/modal-edit.scss";

const addToStorage = (value) => localStorage.setItem("cart", JSON.stringify(value));
const getFromStorage = () => JSON.parse(localStorage.getItem("cart")) || [];

export class Cart {
    constructor() {
        this.products = [];
        this.rootElement = document.createElement("div");
    }

    init() {
        this.products = this.get();
        this.render();
        this.control();
    }

    get() {
        return getFromStorage();
    }

    add(product) {
        const index = this.products.findIndex((item) => item.id === product.id);
        if (index > -1) {
            this.increase(this.products[index]);
        } else {
            this.products = [...this.products, { ...product, count: "1" }];
            addToStorage(this.products);
            this.render(false);
        }
    }

    update(product) {
        const index = this.products.findIndex((item) => item.id === product.id);
        this.products = [...this.products.slice(0, index), product, ...this.products.slice(index + 1)];
        addToStorage(this.products);
        this.render(false);
    }

    delete(product) {
        this.products = this.products.filter((item) => product.id !== item.id);
        addToStorage(this.products);
        this.render(false);
    }

    render(isFirstRender = true) {
        let productsTemplate = "";
        let totalCost = 0;
        this.products.forEach((product) => {
            const cost = product.count * product.bigPrice.replace(/\D/g, "");
            totalCost += cost;
            productsTemplate += cartItemView({
                ...product,
                cost: cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            });
        });
        this.rootElement.innerHTML = "";
        this.rootElement.innerHTML = cartView(
            productsTemplate,
            totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
            !isFirstRender
        );
        if (isFirstRender) {
            document.body.prepend(this.rootElement);
        }
        localStorage.setItem("subtotal", totalCost);
    }

    increase(product) {
        const newCount = Number(product.count) + 1;
        this.update({ ...product, count: newCount.toString() });
    }

    decrease(product) {
        product.count > 1
            ? this.update({ ...product, count: (Number(product.count) - 1).toString() })
            : this.delete(product);
    }

    control() {
        document.querySelector(".cart").addEventListener("click", () => {
            const modalEl = document.querySelector("#modal-history");
            modalEl.classList.add("overlay--show");
        });

        this.rootElement.addEventListener("click", (e) => {
            if (e.target.closest("#close-modal")) {
                document.querySelector("#modal-history").classList.remove("overlay--show");
            } else if (e.target.dataset.action === "remove") {
                const product = this.products.find((item) => item.id === e.target.dataset.id);
                this.decrease(product);
            } else if (e.target.dataset.action === "add") {
                const product = this.products.find((item) => item.id === e.target.dataset.id);
                this.increase(product);
            } else if (e.target.dataset.action === "delete") {
                const product = this.products.find((item) => item.id === e.target.dataset.id);
                this.delete(product);
            }
        });

        this.rootElement.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.dataset.click === "checkout") {
                window.location = `checkout.html#`;
            }
        });
    }
}

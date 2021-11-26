/* eslint-disable func-names */
import { cartView } from "./cart.view";
import { cartItemView } from "./cart-item.view";
import "../../../style/modal-edit.scss";

const addToStorage = (value) => localStorage.setItem("cart", JSON.stringify(value));
const getFromStorage = () => JSON.parse(localStorage.getItem("cart")) || [];

const CART_EVENT = new Event("cartEvent");

export class Cart {
    constructor() {
        this.products = [];
        this.rootElement = document.createElement("div");
    }

    get count() {
        return this.products.reduce((sum, product) => {
            return sum + Number(product.count || 0);
        }, 0);
    }

    get products() {
        return this._products;
    }

    set products(value) {
        this._products = value;
        document.dispatchEvent(CART_EVENT); // Emit event for updating cart count
    }

    reset() {
        this.products = [];
        localStorage.removeItem("cart");
        return this.render();
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
        this.totalCost = 0;
        this.products.forEach((product) => {
            const cost = product.count * product.bigPrice.replace(/\D/g, "");
            this.totalCost += cost;
            productsTemplate += cartItemView({
                ...product,
                cost: cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            });
        });
        this.rootElement.innerHTML = "";
        this.rootElement.innerHTML = cartView(
            productsTemplate,
            this.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
            !isFirstRender
        );
        if (isFirstRender) {
            document.body.prepend(this.rootElement);
        }
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
        document.querySelector(".cart").addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.classList.contains("disabled")) {
                return;
            }
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

import { template } from "./offer.view";
import { getProduct } from "./get-product-offer.view";
import "./offer.scss";

export class Offer {
    constructor(selector, products, cart) {
        this.cart = cart;
        this.products = products;
        this.rootElement = document.querySelector(selector);
    }

    init() {
        this.render();
        this.control();
    }

    render() {
        this.rootElement.innerHTML = template;
        const offersElement = document.querySelector('[data-element="offer"]');
        this.products.forEach((product) => {
            offersElement.innerHTML += getProduct(product);
        });
    }

    control() {
        this.rootElement.addEventListener("click", (e) => {
            e.preventDefault();
            const id = e.target.closest("[data-id]")?.dataset.id;
            if (!id) {
                return;
            }
            if (e.target.dataset.action === "add") {
                const product = this.products.find((item) => item.id === id);
                this.cart.add(product);
                return;
            }
            document.querySelector(`[data-hide-id="${id}"]`).classList.toggle("hide");
        });
    }
}

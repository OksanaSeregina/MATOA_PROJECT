import { template } from "./carousel.view";
import { getProductView } from "./get-product.view";
import { getIndicatorView } from "./get-indicator.view";
import "./carousel.scss";

export class Carousel {
    constructor(selector, products, cart) {
        this.products = products;
        this.rootElement = document.querySelector(selector);
        this.cart = cart;
    }

    init() {
        this.render();
        this.control();
    }

    render() {
        this.rootElement.innerHTML = template;

        const indicators = document.querySelector(".carousel-indicators");
        const products = document.querySelector(".carousel-inner");
        products.innerHTML = "";
        indicators.innerHTML = "";

        this.products.forEach((product) => {
            indicators.innerHTML += getIndicatorView(this.products.indexOf(product));
            products.innerHTML += getProductView(product, this.products[0] === product);
        });
    }

    control() {
        this.rootElement.addEventListener("click", (e) => {
            if (e.target.dataset.element === "add-cart") {
                const product = this.products.find((item) => item.id === e.target.dataset.id);
                this.cart.add(product);
            }
        });
    }
}

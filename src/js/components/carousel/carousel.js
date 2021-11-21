import { template } from "./carousel.view";
import { getProductView } from "./get-product.view";
import { getIndicatorView } from "./get-indicator.view";

export class Carousel {
    constructor(selector, products) {
        this.products = products;
        this.rootElement = document.querySelector(selector);
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
}

import { template } from "./catalog.view";
import { getProduct } from "./get-product.view";
import "./catalog.scss";

export class Catalog {
    constructor(selector, products) {
        this.products = this.chunck(products, 9);
        this.rootElement = document.querySelector(selector);
    }

    init() {
        this.render();
        this.control();
    }

    render() {
        this.rootElement.innerHTML = template;

        const productsElement = document.querySelector("[data-element='products']");
        this.products.forEach((product, index) => {
            const options = index === 0 ? "" : "show hiden-series";
            productsElement.innerHTML += `<div class="series ${options}">${this.getProducts(product)}</div>`;
        });
    }

    getProducts(products) {
        let result = "";
        products.forEach((product) => {
            result += getProduct(product);
        });
        return result;
    }

    control() {
        const button = document.querySelector(".see__more");
        button.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.textContent === "See More") {
                document.querySelector(".show").classList.toggle("hiden-series");
            }
        });

        this.rootElement.addEventListener("click", (e) => {
            e.preventDefault();
            const { id } = e.target.dataset;
            if (!id) {
                return;
            }
            window.location = `product.html?id=${e.target.dataset.id}`;
        });
    }

    chunck(arr, size) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
    }
}

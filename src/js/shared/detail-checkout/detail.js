/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { SHIPPING_COST_MOCK, PACKAGING_COST_MOCK } from "../constants";
import { getDetail, getDetailPayment } from "./get-detail.view";

export class Detail {
    constructor(selector, cart) {
        this.rootElement = document.querySelector(selector);
        this.cart = cart;
    }

    init() {
        this.render();
        this.control();
    }

    render() {
        if (this.rootElement === document.querySelector("#detail-paym")) {
            this.rootElement.innerHTML = getDetailPayment();
            this.timer(720, document.querySelector(".time"));
        } else {
            this.rootElement.innerHTML = getDetail();
        }
    }

    control() {
        const valueSubtotal = document.querySelector('[data-price="subt"]');
        const carrent = this.cart.totalCost;
        const subtCarrent = carrent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        valueSubtotal.textContent = `Rp ${subtCarrent}`;

        const grandTotal = Number(carrent) + PACKAGING_COST_MOCK + SHIPPING_COST_MOCK;
        const carrentGrandTotal = grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const valueGrandTotal = document.querySelector('[data-price="granrdTotal"]');
        valueGrandTotal.textContent = `Rp ${carrentGrandTotal}`;
    }

    timer(timer, display) {
        const timer1 = setInterval(() => {
            let minutes = parseInt(timer / 60, 10);
            let seconds = parseInt(timer % 60, 10);

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            display.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                display.textContent = `Time is up`;
                clearInterval(timer1);
            }
        }, 1000);
    }
}

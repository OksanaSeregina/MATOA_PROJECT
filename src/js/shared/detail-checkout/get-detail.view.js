export const getDetail = () => {
    return `
                    <div class="detail-checkout">
                        <h3>Detail Order</h3>
                        <div class="items">
                            <h4 class="order-data">Subtotal</h4>
                            <h4 class="price-order" data-price="subt">Rp 2.152.000</h4>
                        </div>
                        <div class="items">
                            <h4 class="order-data">Shipping Cost</h4>
                            <h4 class="price-order">Rp 500.000</h4>
                        </div>
                        <div class="items">
                            <h4 class="order-data">Promo Code</h4>
                            <h4 class="price-order">INDONESIA</h4>
                        </div>
                        <div class="items">
                            <h4 class="order-data">Packaging</h4>
                            <h4 class="price-order">Rp 50.000</h4>
                        </div>
                        <hr />
                        <div class="items">
                            <h4 class="order-data">Grand Total</h4>
                            <h4 class="price-order" data-price="granrdTotal">Rp 2.702.000</h4>
                        </div>
                    </div>
  `;
};

export const getDetailPayment = () => {
    return `
  <div class="detail-checkout">
  <h3>Detail Order</h3>
  <div class="items">
      <h4 class="order-data">Subtotal</h4>
      <h4 class="price-order" data-price="subt">Rp 2.152.000</h4>
  </div>
  <div class="items">
      <h4 class="order-data">Shipping Cost</h4>
      <h4 class="price-order">Rp 500.000</h4>
  </div>
  <div class="items">
      <h4 class="order-data">Promo Code</h4>
      <h4 class="price-order">INDONESIA</h4>
  </div>
  <div class="items">
      <h4 class="order-data">Packaging</h4>
      <h4 class="price-order">Rp 50.000</h4>
  </div>
  <hr />
  <div class="items">
      <h4 class="order-data">Grand Total</h4>
      <h4 class="price-order" data-price="granrdTotal">Rp 2.702.000</h4>
  </div>
</div>
                    <div class="payment-detail">
                        <div class="title-payment-detail">
                            <div class="time-container">
                                <div class="title-h3">Payment Detail</div>
                                <div class="time"></div>
                            </div>
                            <p class="descr-payment-detail">
                                Please make a payment according with the limit time specified, starting from now
                            </p>
                        </div>
                    </div>
  `;
};

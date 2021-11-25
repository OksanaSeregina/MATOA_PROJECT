const getFooter = (cost) => {
    if (Number(cost) === 0) {
        return "<div class='col-auto'><h4>Cart is empty</h4></div>";
    }
    return `
        <div class="last__select-card">
          <div class="left__last-card">
              <div class="row g-3 align-items-center">
                  <div class="col-auto">
                      <label for="inputPassword6" class="col-form-label kode">Kode Promo</label>
                  </div>
                  <div class="col-auto">
                      <input
                          type="text"
                          id="inputPassword6"
                          placeholder="INDONESIA"
                          class="form-control kode"
                          aria-describedby="passwordHelpInline"
                      />
                  </div>
                  <div class="col-auto">
                      <span id="passwordHelpInline" class="form-text kode__green"> 35% OFF </span>
                  </div>
              </div>
          </div>
          <div class="right__last-card">
              <div class="subtotal__right-card">
                  <div class="lf__subt">
                      <h4>Subtotal</h4>
                  </div>
                  <div class="rg__subt">
                      <h3>${cost}</h3>
                  </div>
              </div>
          </div>
        </div>
        <div class="button__checkout"><a href="#" data-click="checkout">Checkout</a></div>
        `;
};

export const cartView = (products, totalCost, isOpened = false) => `
<section class="overlay ${isOpened ? "overlay--show" : ""}" id="modal-history">
  <div class="select overlay-dialog">
      <span id="close-modal">&#10005;</span>
      ${products || ""}
      ${getFooter(totalCost)}
  </div>
</div>
`;

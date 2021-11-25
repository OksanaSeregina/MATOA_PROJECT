export const getProduct = (product) => {
    if (!product) {
        return "";
    }
    return `
<div class="col-lg-3 col-sm-6">
  <div data-id=${product.id} class="product__card">
      <div class="product__thumb">
          <a href="#"><img class="offer-image" src=${product.image} /></a>
      </div>
      <div class="product__details">
          <h4><a href="#">${product.name}</a></h4>
          <p class="percent">20% Off</p>
          <p class="small">${product.smallPrice}</p>
          <p class="big">${product.bigPrice}</p>
      </div>
      <div  class="hide show-but" data-hide-id=${product.id}>
          <div class="heart">
              <a href="#"><img src="./images/love.png" alt="heart" /></a>
          </div>
          <div class="card__button">
              <a data-action="add" href="#">Add to cart</a>
          </div>
      </div>
  </div>
</div>
`;
};

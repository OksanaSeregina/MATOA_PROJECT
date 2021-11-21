const getSmallPrice = (price) => {
    return price ? `<p data-id="13">${price}</p>` : "";
};

export const getProduct = (product) => {
    if (!product) {
        return "";
    }
    return `
        <div class="title" data-id=${product.id}>
          <div class="picture" data-link="back" data-id=${product.id}>
            <a href="#" class="back" style='background: url(${product.image}) no-repeat center/50%;' data-id=${
        product.id
    }></a>
          </div>
          <a href="#" data-id=${product.id}>
            <div class="info__product" data-id=${product.id}>
              <h4 data-id=${product.id}>${product.name}</h4>
              ${getSmallPrice(product.smallPrice)}
              <h3 data-id=${product.id}>${product.bigPrice}</h3>
            </div>
          </a>
        </div>
  `;
};

const getSmallPrice = (price) => {
    return price ? `<p class="sm__price">${price}</p>` : "";
};

export const cartItemView = (product) => {
    return `
    <div class="select__card">
    <div class="left__select-card">
        <div class="picture__select" data-link="back__select">
            <a href="#" class="back__select" style='background:url(${product.image}) no-repeat center/50%;'></a>
        </div>
        <div class="info__select">
            <h4>${product.name}</h4>
            ${getSmallPrice(product.smallPrice)}
            <h3>${product.bigPrice}</h3>
            <p class="small__text">Custom Engrave</p>
            <p class="small__text">“Happy | Birthday | from”</p>
        </div>
    </div>
    <div class="right__select-card">
        <p>Select Packaging</p>
        <div class="col-md-7 offset-md-5">
            <select class="form-select" aria-label="Default select example">
                <option selected>Wooden Packaging (Rp 50.000)</option>
                <option value="1">Default Packaging (Free)</option>
            </select>
        </div>

        <div class="trash__select">
            <div class="quantity">
                <div class="choose__quantity" data-action="remove" data-id="${product.id}">
                    <a class="item" href="#"><i class="fas fa-minus"></i></a>
                </div>
                <span class="one">${product.count}</span>
                <div class="choose__quantity" data-action="add" data-id="${product.id}">
                    <a class="item" href="#"><i class="fas fa-plus"></i></a>
                </div>
            </div>
            <h3>${product.cost}</h3>
            <img data-action="delete" src="./images/trash.png" alt="trash" data-id="${product.id}" />
        </div>
    </div>
  </div>
  <hr />
  `;
};

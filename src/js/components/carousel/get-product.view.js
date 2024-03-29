export const getProductView = (product, isFirst) => {
    return `
  <div class="carousel-item ${isFirst ? "active" : ""}" data-bs-interval="2000">
          <img src=${product.image} class="d-block mw-100 m-lg-0 m-auto" alt="clock" />
          <div class="carousel-caption">
            <h1 class="way">${product.name}</h1>
            <hr class="under-way" />
            <p class="text__pink">${product.detail}</p>
            <h3 class="text__discover">Discover</h3>
            <hr class="discover" />
            <div class="button__pink">
              <div class="button1">
                <a data-element="add-cart" data-id=${product.id} class="add__cart" href="#"
                  ><i class="fas fa-cart-plus"></i>Add to cart</a
                >
              </div>
              <div class="button2">
                <a class="cicil" href="#"
                  ><img src="./images/Cicil.png" alt="cicil"
                /></a>
              </div>
            </div>
          </div>
        </div>
  `;
};

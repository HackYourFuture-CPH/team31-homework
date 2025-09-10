const products = getAvailableProducts();
function renderProducts(products) {
  const body = document.body;

  const container = document.createElement("div");
  container.setAttribute("class", "productListContainer");
  body.appendChild(container);

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const title = document.createElement("h3");
    title.innerText = product.name;
    productDiv.appendChild(title);

    const price = document.createElement("p");
    price.innerText = `Price: $${product.price}`;
    productDiv.appendChild(price);

    const rating = document.createElement("p");
    rating.innerText = `Rating: ${product.rating} stars`;
    productDiv.appendChild(rating);

    container.appendChild(productDiv);
  });
}

const availableProducts = window.getAvailableProducts();
renderProducts(availableProducts);

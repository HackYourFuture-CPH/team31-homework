function renderProducts(event) {
  const productName = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  const maxPrice =
    parseFloat(document.getElementById("max-price-input").value.trim()) ||
    Infinity;

  // Check if inputs are empty
  errorMessage = document.querySelector(".error-message");
  if (!productName) {
    if (!errorMessage) {
      errorMessage = document.createElement("h1");
      errorMessage.classList.add("error-message");
      searchBarDiv.appendChild(errorMessage);
    }
    errorMessage.innerText = "You Must Enter The Product Name";
    return; // Exit if any of the required fields are empty
  } else {
    if (errorMessage) {
      errorMessage.innerText = ""; // Clear the error message if inputs are valid
    }
  }

  const products = getAvailableProducts();

  // Remove existing product list if it exists
  let existingContainer = document.querySelector(".productListContainer");
  if (existingContainer) {
    existingContainer.remove();
  }

  const container = document.createElement("div");
  container.setAttribute("class", "productListContainer");

  let foundProduct = false;

  // Loop through products and filter based on the search criteria
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    if (
      product.name.toLowerCase().includes(productName) &&
      product.price <= maxPrice
    ) {
      foundProduct = true;

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
    }
  });
  if (foundProduct) {
    mainSection.appendChild(container);
  }

  if (!foundProduct) {
    if (!errorMessage) {
      errorMessage = document.createElement("h1");
      errorMessage.classList.add("error-message");
      searchBarDiv.appendChild(errorMessage);
    }
    errorMessage.innerText = "No Data Found";
  } else {
    if (errorMessage) {
      errorMessage.innerText = "";
    }
  }
}

let errorMessage;

const headerSection = document.createElement("header");
const headerSectionTitle = document.createElement("h1");
headerSectionTitle.innerText = "HayBay Helpers";
headerSection.appendChild(headerSectionTitle);
document.body.appendChild(headerSection);

const mainSection = document.createElement("main");
document.body.appendChild(mainSection);

const footerSection = document.createElement("footer");
const footerSectionText = document.createElement("p");
footerSectionText.innerText =
  "© 2025 HayBay Helpers - All Rights Reserved - HYF";
footerSection.appendChild(footerSectionText);
document.body.appendChild(footerSection);

const searchBarDiv = document.createElement("div");
searchBarDiv.classList.add("search-bar-div");

const searchInputLabel = document.createElement("label");
searchInputLabel.innerHTML = "Please Enter Some Text To Search In Product";

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("id", "search-input");
searchInput.setAttribute("placeholder", "Search The Product");
searchInput.classList.add("search-input");
searchInput.setAttribute("required", "true");

const searchInputMaxPriceLabel = document.createElement("label");
searchInputMaxPriceLabel.innerHTML =
  "Please Enter Maximum Price of The Product";

const searchInputMaxPrice = document.createElement("input");
searchInputMaxPrice.setAttribute("type", "number");
searchInputMaxPrice.setAttribute("id", "max-price-input");
searchInputMaxPrice.setAttribute("placeholder", "Enter Maximum Price Limit");
searchInputMaxPrice.classList.add("max-price-input");
searchInputMaxPrice.setAttribute("required", "true");

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("button-wrapper");

const searchButton = document.createElement("button");
searchButton.setAttribute("type", "button");
searchButton.setAttribute("id", "searchbutton");
searchButton.innerText = "Click to Search";

const clearButton = document.createElement("button");
clearButton.setAttribute("type", "button");
clearButton.setAttribute("id", "clearbutton");
clearButton.innerText = "Click to Clear";

buttonWrapper.appendChild(searchButton);
buttonWrapper.appendChild(clearButton);
searchBarDiv.appendChild(searchInputLabel);
searchBarDiv.appendChild(searchInput);
searchBarDiv.appendChild(searchInputMaxPriceLabel);
searchBarDiv.appendChild(searchInputMaxPrice);
searchBarDiv.appendChild(buttonWrapper);
mainSection.appendChild(searchBarDiv);

searchButton.addEventListener("click", renderProducts);

clearButton.addEventListener("click", () => {
  document.getElementById("search-input").value = "";
  document.getElementById("max-price-input").value = "";
  const container = document.querySelector(".productListContainer");

  if (container) {
    container.remove();
  }
  if (errorMessage) {
    errorMessage.innerText = ""; // Clear the error message if inputs are valid
  }
});

console.log("=======1.2 Amazon Review=======");

function filterItems(list) {
  let itemsArray = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].price < 30 && list[i].inStock) {
      if (list[i].price < 20) {
        let item = list[i].item;
        itemsArray.push(item);
      }
    }
  }
  if (!itemsArray.length) {
    return [];
  }

  return itemsArray;
}

let shippingItems = [
  { item: "Apple", price: 1.5, inStock: true },
  { item: "Laptop", price: 999.99, inStock: true },
  { item: "T-shirt", price: 15, inStock: false },
  { item: "Bananas", price: 2, inStock: true },
  { item: "Headphones", price: 25, inStock: true },
];

console.log(filterItems(shippingItems));
// Expected Output: ["Apple", "Bananas"]

// This code runs a filter through an array of objects [{shippingItems}]
// finds the products with cost lesser than 20 and are in inStock
// then pushing it into an array (itemsArray) to return it with the console.log.

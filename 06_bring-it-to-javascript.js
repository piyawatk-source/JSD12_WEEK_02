// product example
const product = {
  name: "Tofu Cat Litter", // string
  price: 150, // number
  inStock: true // boolean
};

// list of products
const products = [
  {
    name: "Tofu Cat Litter",
    price: 150,
    inStock: true
  },
  {
    name: "Bentonite Cat Litter Lavender",
    price: 130,
    inStock: true
  }
];

// shopping cart
const cart = [
  {
    productName: "Tofu Cat Litter",
    price: 150,
    quantity: 2
  },
  {
    productName: "Bentonite Cat Litter Lavender",
    price: 130,
    quantity: 1
  }
];

console.log("Product:");
console.log(product);

// show product list
console.log("Products:");
console.log(products);

// show shopping cart
console.log("Cart:");
console.log(cart);
// A mock function to mimic making an async request for data
export function fetchCartByUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:3000/products?userId=${userId}`
    );
    const data = await response.json();
    resolve({ data });
  });
}
export function addToCart(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    resolve({ data });
  });
}

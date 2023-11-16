// A mock function to mimic making an async request for data
export function fetchAllProducts(pagination, filter) {
  return new Promise(async (resolve) => {
    const page = pagination.page;
    const limit = pagination.limit;

    let query = "http://localhost:3000/products?";

    // Using Object.entries to iterate over [key, value] pairs
    for (let [key, value] of Object.entries(filter)) {
      query += `${key}=${value}&`;
    }

    query += `_page=${page}&_limit=${limit}`;

    const response = await fetch(query);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProducts(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    resolve({ data });
  });
}

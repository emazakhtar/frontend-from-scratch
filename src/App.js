import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./features/products/components/Product.js";
import Login from "./features/auth/components/Login.js";
import Signup from "./features/auth/components/Signup.js";
import Protected from "./features/common/Protected.js";
import Navbar from "./features/navbar/Navbar.js";
import ProductDetail from "./features/products/components/ProductDetail.js";
import Cart from "./features/cart/components/Cart.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Navbar>
                <Product />
              </Navbar>
            </Protected>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Protected>
              <Navbar>
                <ProductDetail />
              </Navbar>
            </Protected>
          }
        />
        <Route
          path="/cart"
          element={
            <Protected>
              <Navbar>
                <Cart />
              </Navbar>
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

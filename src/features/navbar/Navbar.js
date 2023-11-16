import React from "react";
import { Link } from "react-router-dom";

function Navbar({ children }) {
  return (
    <div>
      <div class="logo">Ecommerce</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}

export default Navbar;

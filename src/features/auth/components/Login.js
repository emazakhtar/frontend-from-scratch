import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUserAsync } from "../authSlice.js";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkUserAsync(formData));
  };

  const handleChange = (e) => {
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          // value={formData.email}
        ></input>
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          // value={formData.password}
        ></input>
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Login
        </button>
      </form>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;

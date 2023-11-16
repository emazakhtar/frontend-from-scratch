import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, selectLoggedInUser } from "../authSlice.js";
import { Navigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const user = useSelector(selectLoggedInUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserAsync(formData));
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
      {user && <Navigate to="/"></Navigate>}
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
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;

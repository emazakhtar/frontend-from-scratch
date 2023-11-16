import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartByUserAsync, selectCart } from "../cartSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

function Cart() {
  const cartItems = useSelector(selectCart);
  console.log(cartItems);
  const dispatch = useDispatch();
  const userId = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(fetchCartByUserAsync(userId));
  }, [dispatch, userId]);

  return (
    <div>
      {cartItems ? (
        cartItems.map((item) => {
          return (
            <div>
              <h1>{item.title}</h1>
            </div>
          );
        })
      ) : (
        <h1>no items in cart</h1>
      )}
    </div>
  );
}

export default Cart;

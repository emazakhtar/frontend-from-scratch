import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductAsync, selectSelectedProduct } from "../productSlice";
import { addToCartAsync } from "../../cart/cartSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

function ProductDetail() {
  const params = useParams();
  const product_id = params.id;
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);
  const userId = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(fetchProductAsync(product_id));
  }, [dispatch, product_id]);

  const handleCart = () => {
    dispatch(addToCartAsync({ ...selectedProduct, userId: userId }));
  };

  return (
    <div>
      {selectedProduct && (
        <div>
          <img
            src={selectedProduct.thumbnail}
            alt={selectedProduct.title}
          ></img>
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.description}</p>
          <button onClick={handleCart}>Add To Cart</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

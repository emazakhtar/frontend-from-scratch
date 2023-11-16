import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync, selectProduct } from "../productSlice.js";
import { Link } from "react-router-dom";

function Product() {
  const category = ["smartphones", "laptops"];
  const brand = ["apple", "samsung", "vivo"];
  const noOfPages = 10;
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [filter, setFilter] = useState({});

  useEffect(() => {
    dispatch(fetchAllProductsAsync({ pagination: pagination, filter: filter }));
  }, [dispatch, pagination, filter]);

  const handlePagination = (page_number) => {
    setPagination((prev) => {
      return {
        ...prev,
        page: page_number,
      };
    });
  };

  const handleFilter = (name, data) => {
    if (name === "category") {
      setFilter((prev) => {
        return {
          ...prev,
          category: data,
        };
      });
    }
    if (name === "brand") {
      setFilter((prev) => {
        return {
          ...prev,
          brand: data,
        };
      });
    }
  };
  return (
    <div>
      <div style={{ position: "sticky", top: 0 }}>
        <h1 style={{ color: "red" }}>All Products</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h3 style={{ marginRight: "5px" }}>Category</h3>
            {category.map((cat) => (
              <div>
                <button onClick={() => handleFilter("category", cat)}>
                  {cat}
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3>Brand</h3>
            {brand.map((bra) => (
              <div>
                <button onClick={() => handleFilter("brand", bra)}>
                  {bra}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* product grid... */}
      {products &&
        products.map((product) => {
          return (
            <div>
              <img src={product.thumbnail} alt={product.title}></img>
              <Link to={`/product-detail/${product.id}`}>
                <h1>{product.title}</h1>
              </Link>
            </div>
          );
        })}
      {/* pagination... */}
      <div style={{ display: "flex" }}>
        {Array.from({ length: noOfPages }).map((page, index) => {
          return (
            <div>
              {index !== 0 && (
                <button onClick={() => handlePagination(index)}>{index}</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Product;

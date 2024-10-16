import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./easy.css";

const Easy = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&order=Desc`
      );
      const data = await res.json();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div>
      <div className="easyNav">
        <NavLink className="easyHome" to="/">
          &larr; Home
        </NavLink>
        <NavLink className="easyHome" to="/hard">
          Hard &rarr;
        </NavLink>
      </div>
      {products.length > 0 ? (
        <div>
          <div className="products">
            {products.map((prod) => {
              return (
                <span className="products__single" key={prod.id}>
                  <img src={prod.url} alt={prod.title} />
                </span>
              );
            })}
          </div>
          <div className="pagination">
            <button
              className={`paginationButton ${
                page === 1 ? "paginationButtonDisabled" : ""
              }`}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>
            <button
              className="paginationButton"
              onClick={() => setPage(page + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Easy;

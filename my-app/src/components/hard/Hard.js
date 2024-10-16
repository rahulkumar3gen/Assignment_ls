import React from "react";
import { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { NavLink } from "react-router-dom";
import "./hard.css";

const Hard = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&order=Desc`
      );
      const data = await res.json();
      if (data) {
        setProducts((pre) => {
          return [...pre, ...data];
        });
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
      <div className="hardNav">
        <NavLink className="hardHome" to="/">
          &larr; Home
        </NavLink>
        <NavLink className="easyHome" to="/easy">
          Easy &rarr;
        </NavLink>
      </div>
      <Virtuoso
        className="virtuso"
        data={products}
        endReached={() => {
          if (true) {
            setPage((prev) => prev + 1);
          }
        }}
        itemContent={(index, detail) => {
          return (
            <span className="hard_box" key={detail.id}>
              <img className="hardImage" src={detail.url} alt={detail.title} />
            </span>
          );
        }}
        components={{
          Footer: () => {
            return <span>Loading...</span>;
          },
        }}
      />
    </div>
  );
};

export default Hard;

import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import "../styles.css";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="Buy ur favorite car">
      <div className="row text-center">
        <h1 className="text-white">All of cars</h1>
        <div className="row">
          {products &&
            products.map((product, index) => {
              return (
                <div key={index} className="col-4 mb-4">
                  <Card product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </Base>
  );
}

export default Home;

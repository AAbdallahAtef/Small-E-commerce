import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  let api_url = "https://fakestoreapi.com/products";
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  function getProducts() {
    axios
      .get(api_url)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }
  function getCategories() {
    axios
      .get(`${api_url}/categories`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }
  function getProductsInCategories(catName) {
    axios
      .get(`${api_url}/category/${catName}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  if (((products.length===0)||categories.length===0)) return <>Loading......</>
  return (
    <>
      <h2 className="text-center p-3 text-warning">Our Products</h2>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-10 row justify-content-center">
            <div className="col-2 my-2">
              <button
                className="btn btn-info"
                onClick={() => {
                  getProducts();
                }}
              >
                All
              </button>
            </div>
            {categories.map((cat) => (
              <div className="col-2 my-2"  key={cat}>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    getProductsInCategories(cat);
                  }}
                >
                  {cat}
                </button>
              </div>
            ))}
          </div>
         <div className="row">
            {products.map((product) => (
                <div className="col-3 py-2" key={product.id}>
                <Product product={product} showButton={true}></Product>
                </div>
            ))}
         </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

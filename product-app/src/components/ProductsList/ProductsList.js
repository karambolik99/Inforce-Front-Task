import React from "react";
import Product from "../Product/Product";
import "./ProductsList.css";

const ProductsList = ({ products, deleteProduct, editProduct }) => (
  <div className="ProductsList">
    {products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        ></Product>
      );
    })}
  </div>
);

export default ProductsList;

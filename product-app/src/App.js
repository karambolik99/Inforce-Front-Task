import { useEffect, useState } from "react";
// import { connect } from "react-redux";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import axios from "axios";
import { getProducts, deleteProduct } from "./service/products-service";

function App() {
  const url = "http://localhost:8000/products";
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    return getProducts().then((products) => setProducts(products));
  }

  function addNewProduct(product) {
    axios.post(url, product);
    fetchProducts();
  }

  function editProduct(product) {
    console.log(product);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <ShopHeader addNewProduct={addNewProduct}></ShopHeader>
      <ProductsList
        products={products}
        editProduct={editProduct}
        deleteProduct={(id) => deleteProduct(id).then(() => fetchProducts())}
      ></ProductsList>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Product.css";
import axios from "axios";

const Product = ({ product, deleteProduct, editProduct }) => {
  const baseUrl = "http://localhost:8000/products";
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState("");
  const [url, setUrl] = useState("");

  function editStateProduct(product) {
    axios
      .get(`${baseUrl}/${product.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  function editProduct(product) {}

  function handleChangeName(e) {
    console.log(product.id);
    setName(e.target.value);
    console.log(name);
  }

  function handleChangeSize(e) {
    setSize(e.target.value);
  }

  function handleChangeCount(e) {
    setCount(e.target.value);
  }

  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  return (
    <div className="Product">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.imageUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Size {product.size}</p>

          <div className="container2">
            <div className="interior2">
              <a className="btn2" href="#open-modal2">
                <button
                  onClick={() => editStateProduct(product)}
                  id="myBtn"
                  type="button"
                  className="btn btn-success edit"
                >
                  Edit
                </button>
              </a>
              <button
                onClick={() => {
                  deleteProduct(product.id);
                }}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
          <div id="open-modal2" className="modal-window2">
            <div>
              <a href="#" title="Close" className="modal-close2">
                Close
              </a>
              <h1>Edit Product</h1>
              <form
                onSubmit={() =>
                  editProduct({
                    name,
                    size,
                    count,
                    imageUrl: url,
                  })
                }
              >
                <div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Product name"
                      value={name}
                      onChange={handleChangeName}
                    />
                  </div>
                  <div className="col-sm-12 d-flex">
                    <input
                      type="number"
                      className="form-control w-50"
                      placeholder="Product size"
                      value={size}
                      onChange={handleChangeSize}
                    />
                    <input
                      type="number"
                      className="form-control w-50"
                      placeholder="Product count"
                      value={count}
                      onChange={handleChangeCount}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      onChange={handleChangeUrl}
                      type="text"
                      className="form-control"
                      placeholder="Enter url"
                      value={url}
                    />
                  </div>
                  <div className="col-sm-6"></div>
                </div>
                <div>
                  <small>Check out</small>
                </div>
                <button id="z" type="submit" className="btn btn-secondary">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;

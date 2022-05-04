import React, { useState } from "react";
import "./ShopHeader.css";

const ShopHeader = ({ addNewProduct }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState("");
  const [url, setUrl] = useState("");
  // const [nameValid, setNameValid] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
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

  function validateName(name) {
    return name.length >= 5;
  }

  function validateCount(count) {
    return count > 0;
  }

  function validateSize(size) {
    return size > 0;
  }

  function validateUrl(url) {
    return url.length > 15;
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (
      validateName(name) &&
      validateCount(count) &&
      validateSize(size) &&
      validateUrl(url)
    ) {
      addNewProduct({
        name,
        size,
        count,
        imageUrl: url,
      });
    } else alert("Please, check your data");
  }

  return (
    <div className="ShopHeader">
      <div className="container">
        <div className="interior">
          <a className="button" href="#open-modal">
            👋 Add new product
          </a>
        </div>
      </div>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            Close
          </a>
          <h1>Adding new product!</h1>
          <form onSubmit={handleOnSubmit}>
            <div>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  onChange={handleChangeName}
                />
              </div>
              <div className="col-sm-12 d-flex">
                <input
                  type="number"
                  className="form-control w-50"
                  placeholder="Product size"
                  onChange={handleChangeSize}
                />
                <input
                  type="number"
                  className="form-control w-50"
                  placeholder="Product count"
                  onChange={handleChangeCount}
                />
              </div>
              <div className="col-sm-12">
                <input
                  onChange={handleChangeUrl}
                  type="text"
                  className="form-control"
                  placeholder="Enter url"
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
  );
};

export default ShopHeader;

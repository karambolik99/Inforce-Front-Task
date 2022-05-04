import axios from "axios";

const baseUrl = "http://localhost:8000/products";

const getProducts = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const deleteProduct = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export { getProducts, deleteProduct };

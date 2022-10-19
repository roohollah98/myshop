import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "../redux/product/productActions";
import Product from "./product";

//style
import style from "./products.module.css";
const BASEURL = "https://fakestoreapi.com";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  console.log(data);
  useEffect(() => {
    if (data.products.length === 0) {
      dispatch(fetchRequest());
      axios
        .get(`${BASEURL}/products`)
        .then((response) => dispatch(fetchSuccess(response.data)))
        .catch((error) => dispatch(fetchFailure(error.message)));
    }
  }, []);
  return (
    <div className={style.productsContainer}>

      {data.loading ? (
        <p>loading</p>
      ) : data.error ? (
        <p>{data.error}</p>
      ) : (
        data.products.map((item) => {
          return <Product key={item.id} data={item} />;
        })
      )}
    </div>
  );
};

export default Products;

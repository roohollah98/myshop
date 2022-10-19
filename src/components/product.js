import React from "react";
import { Link } from "react-router-dom";
import { checkQuantity, isInBasket, shorter } from "../helpers/functions";
import style from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  decrease,
  increase,
  remove,
} from "../redux/basket/basketActions";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  return (
    <div className={style.productContainer}>
      <div className={style.imageContainer}>
        <img src={data.image} />
      </div>

      <div className={style.details}>
        <h3>{shorter(data.title)}</h3>
        <div>
          <Link to={`/products/${data.id}`}>details</Link>
          <p>{data.price}$</p>
        </div>
        <div className={style.buttons}>
          {isInBasket(basket, data) ? (
            <button onClick={() => dispatch(increase({ ...data }))}>+</button>
          ) : (
            <button
              className={style.addBtn}
              onClick={() => {
                dispatch(addToBasket({ ...data }));
              }}
            >
              add to cart
            </button>
          )}
          {checkQuantity(basket, data, "checkOne") && (
            <button onClick={() => dispatch(remove({ ...data }))}>
              remove
            </button>
          )}
          {checkQuantity(basket, data, "checkMore") && (
            <button onClick={() => dispatch(decrease({ ...data }))}>-</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

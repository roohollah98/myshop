import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BasketCard from "./basketCard";
import style from "./basket.module.css";
import { Link, useNavigate } from "react-router-dom";
import { checkout, clear } from "../redux/basket/basketActions";
const Basket = () => {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  return (
    <div className={style.Container}>
      <div className={style.basketContainer}>
        {basket.basket.map((item) => {
          return <BasketCard data={item} />;
        })}
      </div>
      {basket.checkOut && (
        <div className="checkoutContainer">
          <p>checkOut successFully</p>
          <button
            onClick={() => {
              navigate("/products");
            }}
          >
            by more
          </button>
        </div>
      )} {basket.total>0&& (
        <div className={style.checkContainer}>
          <div className={style.checkOutWrapper}>
            <h3>welcome to checkOut</h3>
            <p>total: {basket.total}</p>
            <p>count Items: {basket.countItems}</p>
            <div className={style.buttonsContainer}>
              <button
                onClick={() => {
                  dispatch(checkout());
                }}
              >
                checkOut
              </button>
              <button
                onClick={() => {
                  console.log("clear");
                  dispatch(clear());
                }}
              >
                clear
              </button>
            </div>
          </div>
        </div>
      )}

      {basket.total<1 && !basket.checkOut && (
        <div className="clearContainer">
          <p>cleared successfully</p>
          <Link to="/">
            <button>go back </button>
          </Link>
        </div>
      )}

     

    </div>
  );
};

export default Basket;

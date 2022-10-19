import React from "react";
import style from "./basket.module.css";
import removeBtn from '../assets/remove.png'
import { useDispatch } from "react-redux";
import { decrease, increase,remove } from "../redux/basket/basketActions";
const BasketCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.basketCardContainer}>
      <div className={style.imageContainer}>
        <img src={data.image} />
      </div>
      <div className={style.details}>
        <h3>{data.title}</h3>
        <p>{data.price}$</p>
      </div>
      <div className={style.buttons}>
        <button
          onClick={() => {
            dispatch(increase({ ...data }));
          }}
        >
          +
        </button>
        <span>{data.quantity}</span>
        {
          data.quantity>1?( <button
          onClick={() => {
            dispatch(decrease({ ...data }));
          }}
        >
          -
        </button>):(<button
          onClick={() => {
            dispatch(remove({ ...data }));
          }}
        >
          <img  src={removeBtn} alt="remove"/>
        </button>)
        }
       
      </div>
    </div>
  );
};

export default BasketCard;

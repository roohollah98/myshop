import React from "react";
import { Link } from "react-router-dom";
import basketIcon from "../assets/basket.png";
import { useSelector } from "react-redux";
//style
import style from "./header.module.css";
const Header = () => {
  const count = useSelector((state) => state.basket.countItems);
  return (
    <div className={style.headerContainer}>
      <h3>My Shop</h3>
      <Link to={count > 0 && `/basket`} className={style.iconWrapper}>
        <img alt="basket" src={basketIcon} />
        <span>{count}</span>
      </Link>
     
    </div>
  );
};

export default Header;

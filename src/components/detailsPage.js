import React from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./details.module.css";
const DetailsPage = () => {
  const products = useSelector((state) => state.products.products);
  const param = useParams();
const navigate=useNavigate();
  const product = products[Number(param.id) - 1];
  return (
    <div className={style.detailsContainer}>
   


    <div className={style.imageContainer}>
        <img src={product.image} />
      </div>
      
        <div className={style.detailsContent}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            <span>category:</span> {product.category}
          </p>
          <p><span >price: </span>{product.price}$</p>
          <button onClick={()=>{navigate("..")}} style={{marginTop:"20px"}} >back to shop</button>
        </div>
      
   
    </div>

      

  );
};

export default DetailsPage;

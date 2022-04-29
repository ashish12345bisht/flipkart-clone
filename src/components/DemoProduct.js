import React,{useState} from "react";
import { Link } from "react-router-dom";

function DemoProduct({item}) {
  const {title,price,image,category}=item;
  let prevPrice=""
  if(Number.isInteger(category)){
    prevPrice="prevPrice";
  }
  return (
    <Link style={{ textDecoration: "none", color: "#333" }} to="product">
      <div className="products">
        <img src={image} />
        <h4>{title.substring(0,25)+'...'}</h4>
        <h3>₹{parseInt(price)*72.5}</h3>
        <h5 className={prevPrice}>{category}</h5>
      </div>
    </Link>
  );
}

export default DemoProduct;

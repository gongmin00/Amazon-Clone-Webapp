import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{props.title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product-rating">
          {Array(props.rating)
            .fill()
            .map((item) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="product-img" />
      <button>Add to Basket</button>
    </div>
  );
}
export default Product;

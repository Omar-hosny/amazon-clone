import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* This will create an array with size of rating and fill it with empty values and map throw it and then return star deprnd on rating */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="image" />
      <button onClick={addToCart}>add to cart</button>
    </div>
  );
};

export default Product;

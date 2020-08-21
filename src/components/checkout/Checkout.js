import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {cart && cart.length === 0 ? (
          <div>
            <h1>your shopping cart is empty</h1>
            <p>
              you have no items in cart to buy one or more click "add to cart"
              next to the items
            </p>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your shopping cart</h1>
            {/* list all of products */}
            {cart &&
              cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  price={item.price}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                />
              ))}
          </div>
        )}
      </div>

      {cart && cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;

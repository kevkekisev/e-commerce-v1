import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import CartItem from "./CartItem";
import { getCarttotal, clearCart } from "./CartSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

function CartContainer() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarttotal());
  }, [cartItems]);

  function calcTax() {
    const taxFree = ((100 / 120) * cartTotalAmount).toFixed(2);
    return (cartTotalAmount - taxFree).toFixed(2);
  }

  function calcTaxFree() {
    return ((100 / 120) * cartTotalAmount).toFixed(2);
  }

  useEffect(() => {
    calcTax();
    calcTaxFree();
  }, [cartTotalAmount]);

  if (cartItems.length === 0) {
    return (
      <>
        <div className="empty-cart">
          <h1>Your Shopping Cart is empty!</h1>
          <Link className="browse-btn" to="/catalogue">
            BROWSE HERE
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cart-title">
        <h2>Shopping Cart</h2>
      </div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer className="cost-container">
        <div className="price-container">
          <h2 className="checkout-info">Tax:£{calcTax()}</h2>
          <h2 className="checkout-info">Cost:£{calcTaxFree()}</h2>
          <h2 className="checkout-info">Total:£{cartTotalAmount}</h2>
          <button onClick={() => dispatch(clearCart())} className="delete-btn">
            <FontAwesomeIcon icon={faTrashArrowUp} />
          </button>
        </div>
        <div className="checkout-direction">
          <Link className="explore-btn" to={`/checkout`}>
            CHECKOUT
          </Link>
        </div>
      </footer>
    </>
  );
}

export default CartContainer;

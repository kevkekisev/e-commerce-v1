import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "./CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-item-container">
        <img src={props.image} width="100px" className="cart-item-img" />
        <h2 className="cart-item-title">{props.title}</h2>

        <h3>{props.weight}</h3>
        <h3>{props.price}</h3>
        <button className="cart-btn" onClick={() => dispatch(remove(props.id))}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <div className="qty-container">
          <button
            className="cart-btn"
            onClick={() => dispatch(decrease(props.id))}
          >
            <FontAwesomeIcon icon={faCircleMinus} />
          </button>
          <h3 className="cart-amount">{props.quantity}</h3>
          <button
            className="cart-btn"
            onClick={() => dispatch(increase(props.id))}
          >
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;

import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <section class="top-nav">
      <div>
        <Link to="/" className="nav-title">
          Project Demeter
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <Link to="/" className="nav-route">
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalogue" className="nav-route">
            Catalogue
          </Link>
        </li>

        <li className="cart">
          {" "}
          <Link to="/cart">
            <FontAwesomeIcon className="cart-shopping" icon={faCartShopping} />
          </Link>
          <p className="cart-quantity">{cartTotalQuantity}</p>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;

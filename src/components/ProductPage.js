import React, { useState } from "react";
import { useParams } from "react-router";
import Database from "./Database";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import { Link } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <div className="product-navigation-div">
        <Link
          className="browse-btn product-catalogue-btn product-nav"
          to="/catalogue"
        >
          BACK TO CATALOGUE
        </Link>
        <Link className="explore-btn home-btn product-nav" to="/">
          HOME
        </Link>
      </div>
      <div className="product-container">
        <div>
          <img
            className="product-page-img"
            src={Database[id - 1].image}
            alt={Database[id - 1].title}
          />
        </div>
        <div className="product-page-description">
          <h1>{Database[id - 1].title}</h1>
          <p>{Database[id - 1].description}</p>
          <h3 className="product-page-price">£{Database[id - 1].price}</h3>
          <div className="qty-container"></div>
          <button
            className="buy-btn"
            onClick={() => dispatch(addToCart(Database[id - 1]))}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faTruckFast,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MainSlide() {
  return (
    <div className="main-slide">
      <div className="main-title-container">
        <h1 className="main-title">Project Demeter</h1>
        <h2 className="main-description">Find the best house plant for you</h2>
        <h2 className="link-to-catalogue">
          Why Choose <strong>Project Demeter</strong>
        </h2>
        <Link className="browse-btn" to="/catalogue">
          BROWSE HERE
        </Link>
      </div>
      <div className="main-slide-features">
        <div className="feature-div">
          <FontAwesomeIcon icon={faTruckFast} />
          <h3>Incredibly Fast Shipping</h3>
          <p>Always Same-Day or Next-Day Delivery.</p>
        </div>
        <div className="feature-div">
          <FontAwesomeIcon icon={faSeedling} />
          <h3>Only The Highest Quality</h3>
          <p>Find the rarest plants available here.</p>
        </div>
        <div className="feature-div">
          <FontAwesomeIcon icon={faTag} />
          <h3>Affordable Prices</h3>
          <p>
            We constantly run sales and promotions to ensure you have the best
            deals available for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSlide;

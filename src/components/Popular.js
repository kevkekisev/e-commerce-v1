import React from "react";
import creatine from "../images/creatine.png";
import whey from "../images/wheyprotein.jpeg";
import preworkout from "../images/preworkout.jpeg";
import { Link } from "react-router-dom";
import Database from "./Database";

function Popular() {
  return (
    <div className="popular-div">
      <div className="popular-container">
        <div>
          <h2>BEST SELLERS</h2>
        </div>
        <div className="popular-products">
          <div className="popular-item">
            <img src={creatine} alt="creatine" className=" popular-item-img" />
            <h2>Creatine Monohydrate</h2>
            <h3>Highest Quality Creatine on the Market.</h3>
            <Link className="explore-btn" to={`/catalogue/${Database[0].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img src={whey} alt="creatine" className=" popular-item-img" />
            <h2>Whey Protein</h2>
            <h3>The most Requested Product in our current collection.</h3>
            <Link className="explore-btn" to={`/catalogue/${Database[1].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img
              src={preworkout}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>Pre-Workout</h2>
            <h3>The Only Pre-Workout you will ever need.</h3>
            <Link className="explore-btn" to={`/catalogue/${Database[2].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;

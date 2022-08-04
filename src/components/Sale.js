import React from "react";
import massgainer from "../images/massgainer.jpg";
import bcaa from "../images/bcaa.jpeg";
import mealreplacement from "../images/MealReplacement.jpg";
import { Link } from "react-router-dom";
import Database from "./Database";

function Sale() {
  return (
    <div className="popular-div">
      <div className="popular-container">
        <div>
          <h2>LIMITED SALE</h2>
        </div>
        <div className="popular-products">
          <div className="popular-item">
            <img
              src={massgainer}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>Mass Gainer</h2>
            <h3>When it is time to increase the Calories</h3>
            <Link className="explore-btn" to={`/catalogue/${Database[3].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img src={bcaa} alt="creatine" className=" popular-item-img" />
            <h2>BCAA - AMINO ACIDS</h2>
            <h3>Additional repair for the muscles</h3>
            <Link className="explore-btn" to={`/catalogue/${Database[4].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img
              src={mealreplacement}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>Meal Replacement</h2>
            <h3>Providing the body with essential nutrition</h3>
            <Link className="explore-btn" to={`/catalogue/${Database[5].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;

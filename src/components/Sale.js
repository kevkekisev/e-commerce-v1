import React from "react";
import plant04 from "../images/plant04.jpg";
import plant05 from "../images/plant05.jpg";
import plant06 from "../images/plant06.jpg";
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
              src={Database[3].image}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>{Database[3].title}</h2>
            <p>Add it to the list of air purifying plants.</p>
            <Link className="explore-btn" to={`/catalogue/${Database[3].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img
              src={Database[4].image}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>{Database[4].title}</h2>
            <p>
              This is a go-to gift for birthdays, weddings, and anniversaries.
            </p>
            <Link className="explore-btn" to={`/catalogue/${Database[4].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img
              src={Database[5].image}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>{Database[5].title}</h2>
            <p>
              Monstera is iconic from many 70’s photographs, album covers, or
              advertisements.
            </p>
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

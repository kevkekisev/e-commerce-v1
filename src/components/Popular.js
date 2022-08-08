import React from "react";

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
            <img
              src={Database[0].image}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>{Database[0].title}</h2>
            <p>
              It’s deep, green leaves have a rubbery look that is very bold.
            </p>
            <Link className="explore-btn" to={`/catalogue/${Database[0].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img
              src={Database[1].image}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>{Database[1].title}</h2>
            <p>
              This plant has great architectural leaves, curving as it grows for
              a tropical look.
            </p>
            <Link className="explore-btn" to={`/catalogue/${Database[1].id}`}>
              EXPLORE{" "}
            </Link>
          </div>
          <div className="popular-item">
            <img
              src={Database[2].image}
              alt="creatine"
              className=" popular-item-img"
            />
            <h2>{Database[2].title}</h2>
            <p>
              This plant also made the list of air-filtering plants from the
              NASA clean air study.
            </p>
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

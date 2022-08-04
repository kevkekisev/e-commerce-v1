import React from "react";
import Data from "../components/Database";

import { Link } from "react-router-dom";

const database = Data.map(function (item) {
  return (
    <div className="popular-item catalogue-item">
      <img src={item.image} alt={item.title} className=" popular-item-img" />
      <h2>{item.title}</h2>
      <h3>£{item.price}</h3>
      <Link className="explore-btn" to={`/catalogue/${item.id}`}>
        EXPLORE{" "}
      </Link>
    </div>
  );
});

function Catalogue() {
  return (
    <>
      <div className="grid-container catalogue">{database}</div>
    </>
  );
}

export default Catalogue;

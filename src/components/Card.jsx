import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, description, price }) => {
  return (
    <div className="ba b--black-20 pa3 ma2">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/* Link to the SingleView for the specific product */}
      <Link to={`/product/${id}`} className="blue underline pointer">
        View Details
      </Link>
    </div>
  );
};


export default Card;
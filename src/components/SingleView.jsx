import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleView = ({ data }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigation
  const product = data.find((item) => item.id.toString() === id); // Find the product by ID

  if (!product) {
    return <p>Product not found!</p>; // Fallback for invalid IDs
  }

  return (
    <div className="pa4">
      <button onClick={() => navigate(-1)} className="mb3 blue underline pointer">
        Go Back
      </button>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default SingleView;

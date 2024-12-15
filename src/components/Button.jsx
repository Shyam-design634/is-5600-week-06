import React from "react";

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="ba b--black bg-light-gray pa2 pointer"
      onClick={handleClick}
      disabled={disabled} // Pass disabled state (optional)
    >
      {text}
    </button>
  );
};

export default Button;


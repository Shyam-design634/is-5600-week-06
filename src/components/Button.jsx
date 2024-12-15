import React from "react";

const Button = ({ text, handleClick,  isDisabled  }) => {
  return (
    <button
    onClick={handleClick}
    disabled={isDisabled} // Disable button if isDisabled is true
    className={`pa2 ba b--black-20 ${
      isDisabled ? "bg-light-gray" : "bg-light-blue"
    }`}
  >
      {text}
    </button>
  );
};

export default Button;


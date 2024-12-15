import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search"; 


const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Function to filter products by tags
  const filterTags = (searchValue) => {
    setSearchTerm(searchValue); // Update search term state
    const filteredProducts = data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      )
    );

    setProducts(filteredProducts.slice(0, limit)); // Set filtered products
    setOffset(0); // Reset pagination to the first page
  };


  const handlePrevious = () => {
    if (offset > 0) {
      setOffset((prevOffset) => prevOffset - limit);
    }
  };

  const handleNext = () => {
    if (offset + limit < data.length) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data]);

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
    </div>
  );
};

export default CardList;

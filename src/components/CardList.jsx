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

 // Unified pagination handler
 const handlePagination = (direction) => {
  const filteredData = searchTerm
    ? data.filter((product) =>
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  if (direction === "next" && offset + limit < filteredData.length) {
    setOffset((prevOffset) => prevOffset + limit);
  } else if (direction === "previous" && offset > 0) {
    setOffset((prevOffset) => prevOffset - limit);
  }
};
// Update displayed products when offset or searchTerm changes
useEffect(() => {
  const filteredData = searchTerm
    ? data.filter((product) =>
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  const start = offset;
  const end = offset + limit;
  setProducts(filteredData.slice(start, end));
}, [offset, searchTerm, data]);

// Check if Next button should be disabled
const isNextDisabled = searchTerm
  ? offset + limit >= data.filter((product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ).length
  : offset + limit >= data.length;

return (
  <div className="cf pa2">
    {/* Search Component */}
    <div className="mb3">
      <Search handleSearch={filterTags} />
    </div>

    {/* Product Cards */}
    <div className="mt2 mb2">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>

    {/* Pagination Buttons */}
    <div className="flex items-center justify-center pa4">
      <Button
        text="Previous"
        handleClick={() => handlePagination("previous")}
      />
      <Button
        text="Next"
        handleClick={() => handlePagination("next")}
        isDisabled={isNextDisabled} // Pass disabled status
      />
    </div>
  </div>
);
};

export default CardList;
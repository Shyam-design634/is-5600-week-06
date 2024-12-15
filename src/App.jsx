// App.jsx
import React from "react";
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import CardList from './components/CardList';
import SingleView from "./components/SingleView";
import productData from './data/full-products';
// App.jsx
// Mock product data
const mockData = [
  { id: 1, name: "Product 1", description: "Description for Product 1" },
  { id: 2, name: "Product 2", description: "Description for Product 2" },
  // Add more products here...
];
// ...

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Route for the product list */}
        <Route path="/" element={<CardList data={productData} />} />
        {/* Route for a single product view */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;

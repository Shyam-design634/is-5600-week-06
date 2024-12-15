// App.jsx
import Header from './components/Header';

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
      <CardList data={mockData}/>
    </div>
  );
}

export default App;

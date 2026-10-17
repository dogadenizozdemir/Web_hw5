import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState('');

  return (
    <div>
      <h1>React Product Dashboard</h1>
      
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
      </div>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
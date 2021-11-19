import React, {useState, useEffect} from 'react';
import "./App.css";


function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  let count = 1;

  const fetchItems = async () => {
      const dataD = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    
      const items = await dataD.json();
      console.log(items.data);
      setItems(items.data);
  }

  return (
    <div className="App">
      {items.map(item => (
        <h1>{items.itemId} shop {count++}</h1>
      ))}
    </div>
  );
}

export default Shop;

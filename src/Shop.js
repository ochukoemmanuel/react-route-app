import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const fetchData = await fetch("https://fakestoreapi.com/products");

    const jsData = await fetchData.json();
    console.log(jsData);
    setItems(jsData);
  };

  return (
    <div className="App">
      <h1>Shop page</h1>
      {items.map(items => (
        <p key={items.id}>
          <Link className="link" value={items.id} to={`/shop/${items.id}`}>
            {items.title}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Shop;

import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({match}) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${"8"}`);
    const item = await fetchItem.json();

    console.log(item);
    setItem(item);
  };

  return (
    <div className="App">
      <h2>{item.title}</h2>
      <img className="img" src={item.image} alt={item.title} />
      
    </div>
  );
}

export default ItemDetail;

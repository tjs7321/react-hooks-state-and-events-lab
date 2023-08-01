import React, {useState} from "react";

function Item({ name, category }) {
  const [cartAdd, setCartAdd] = useState(true)
  function addToCart() {
    setCartAdd((cartAdd) => !cartAdd)
  }

  return (
    <li className={cartAdd ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cartAdd ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;

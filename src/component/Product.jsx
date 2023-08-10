import React from "react";

function Product({ item, handleClick, handleChange }) {
  //   const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={item.image} alt="" />
      </div>
      <div className="details">
        <h4>{item.title}</h4>
        <h4> ${item.price}</h4>
      </div>
      <div className="add">
        <div class="change_amount">
          <button onClick={() => handleChange(item, 1)}>+</button>
          <button>{item.amount}</button>
          <button onClick={() => handleChange(item, -1)}>-</button>
        </div>

        <button onClick={() => handleClick(item)}>Add</button>
      </div>
    </div>
  );
}

export default Product;

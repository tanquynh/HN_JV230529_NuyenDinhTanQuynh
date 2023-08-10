import React, { useState, useEffect } from "react";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handleDelete = (id) => {
    const cart = [];
    setCart(cart);
  };
  const handleRemove = (id) => {
    const arrCart = cart.filter((item) => item.id !== id);
    setCart(arrCart);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>USD : {price}</span>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </article>
  );
};

export default Cart;

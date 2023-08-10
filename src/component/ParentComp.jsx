import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Cart from "./Cart";
import Listproduct from "./Listproduct";

const ParentComp = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    item.amount += 1;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    console.log(cart[ind]);
    cart[ind].amount += d;
    if (cart[ind].amount === 0) {
      cart[ind].amount = 1;
    }
    setCart([...cart]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div>
      <div className="body">
        <Navbar />
        <Listproduct
          handleClick={handleClick}
          setCart={setCart}
          handleChange={handleChange}
        />
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default ParentComp;

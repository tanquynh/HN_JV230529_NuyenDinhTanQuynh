import React from "react";
import list from "../data";
import Product from "./Product";

function Listproduct({ handleClick, handleChange }) {
  return (
    <section>
      {list.map((item) => (
        <Product
          key={item.id}
          item={item}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      ))}
    </section>
  );
}

export default Listproduct;

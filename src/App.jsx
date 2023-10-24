import "./App.css";
import React, { useState, useEffect } from "react";
import products from "./products";

export default function App() {
  const [cart, setCart] = useState([]);

  // const addToCart = (item) => {

  // };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const Product = ({ id, title, cost, amountInStock, addToCart }) => {
    const [quantity, setQuantity] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);

    const onIncrement = () => {
      if (amountInStock > quantity) {
        setQuantity((prevState) => prevState + 1);
      }
    };

    const onDecrement = () => {};

    const handleQuantityUpdate = () => {
      if (quantity > 0) {
        setSelectedItem((prevState) => {
          return { ...prevState, quantity: quantity };
        });
      } else {
        setSelectedItem({ id, title, cost, quantity });
      }
    };

    useEffect(() => {
      handleQuantityUpdate();
    }, [quantity]);

    useEffect(() => {
      addToCart(selectedItem);
    }, [selectedItem]);

    return (
      <div className="product">
        <h1>{title}</h1>
        <p>${cost}</p>
        <p>{`${quantity}/${amountInStock}`}</p>
        <div className="product-actions">
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="products">
        <Product
          key={1}
          id={1}
          title="Product 1"
          cost={25}
          amountInStock={5}
          addToCart={addToCart}
        />
        <Product
          key={2}
          id={2}
          title="Product 2"
          cost={25}
          amountInStock={5}
          addToCart={addToCart}
        />
        <Product
          key={3}
          id={3}
          title="Product 3"
          cost={25}
          amountInStock={5}
          addToCart={addToCart}
        />
        <Product
          key={4}
          id={4}
          title="Product 4"
          cost={25}
          amountInStock={5}
          addToCart={addToCart}
        />
      </div>
      <hr />

      <div>
        <h1>My Cart</h1>
        <ul></ul>
      </div>
    </div>
  );
}

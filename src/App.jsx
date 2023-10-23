import "./App.css";
import React, { useState, useEffect } from "react";
import products from "./products";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const Product = ({ id, title, cost, amountInStock }) => {
    const [quantity, setQuantity] = useState(0);

    const onIncrement = () => {
      setQuantity((prevState) => {
        if (prevState < amountInStock) {
          return prevState + 1;
        } else {
          return prevState;
        }
      });
    };

    const onDecrement = () => {
      setQuantity((prevState) => {
        if (prevState > 0) {
          return prevState - 1;
        } else {
          return prevState;
        }
      });
    };

    const handleAddToCart = () => {
      let item = {
        id,
        title,
        cost,
        quantity,
      };
    };

    useEffect(() => {
      handleAddToCart();
    }, [quantity]);

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
        <ul>
          {cart.map((cartItem) => {
            return (
              <li>
                {cartItem.title} {cartItem.quantity}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

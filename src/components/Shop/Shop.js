import React, { useState } from "react";
import fakeData from "../../fakeData/fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Review from "../Review/Review";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProduct] = useState(first10);

  const handleAddProduct = (product) => {
    const newProduct = [...cart, product];
    setCart(newProduct);
  };

  const handleRemoveProduct = (product) => {
    const newProduct = cart.filter(pd => pd.key!== product.key);
    setCart(newProduct);
  };

  const [cart, setCart] = useState([]);
  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product
              key={product.key}
              handleAddProduct={handleAddProduct}
              product={product}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <Review handleRemoveProduct = {handleRemoveProduct} cart = {cart}></Review>
      </div>
    </div>
  );
};

export default Shop;

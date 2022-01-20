import React, { useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Review from "../Review/Review";
import "./Shop.css";

const Shop = () => {
	const first10 = fakeData.slice(0, 20);
	const [products, setProducts] = useState(first10);
	const [cart, setCart] = useState([]);

	const handleAddProduct = (product) => {
		let newProduct = [...cart];
		let exist = newProduct.find((pd) => pd.key === product.key);
		if (exist !== undefined) {
			newProduct = newProduct.filter((pd) => pd.key !== product.key);
			product.quantity += 1;
		} else product.quantity += 1;
		newProduct = [...newProduct, product];
		setCart(newProduct);
	};

	const handleRemoveProduct = (product) => {
		product.quantity = 0;
		const newProduct = cart.filter((pd) => pd.key !== product.key);
		setCart(newProduct);
	};

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
				<Cart cart={cart}>
					<Link to={{ pathname: "/review" }}>
						<button className="btn-regular">
							Review Your Order
						</button>
					</Link>
				</Cart>
				<Review
					handleRemoveProduct={handleRemoveProduct}
					cart={cart}
				></Review>
			</div>
		</div>
	);
};

export default Shop;

import React from "react";
import "./ReviewProduct.css";

const ReviewProduct = (props) => {
	const { name, img, price, seller, category, quantity } = props.product;
	return (
		<div className="reviewProduct">
			<img src={img} alt="null" />
			<p>{name}</p>
			<p>by {seller}</p>
			<p>price {price}</p>
			<p>{category}</p>
			<p>quantity: {quantity}</p>
			<button onClick={() => props.handleRemoveProduct(props.product)}>
				Remove
			</button>
		</div>
	);
};

export default ReviewProduct;

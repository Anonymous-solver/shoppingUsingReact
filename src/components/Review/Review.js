import React from "react";
import ReviewProduct from "../ReviewProduct/ReviewProduct";

const Review = (props) => {
	return (
		<div>
			<h2>Review Section</h2>
			{props.cart.map((product) => (
				<ReviewProduct
					handleRemoveProduct={props.handleRemoveProduct}
					key={product.key}
					product={product}
				></ReviewProduct>
			))}
		</div>
	);
};

export default Review;

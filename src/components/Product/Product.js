import React from 'react';
import "./Product.css";

const Product = (props) => {
    // console.log(props)
    const {name, img, price, seller, category} = props.product;
    
    return (
        <div className = "product">
            <div>
                <img src={img} alt="null" />
            </div>
            <div className="product-details">
                <p>{name}</p>
                <p>by {seller}</p>
                <p>price {price}</p>
                <p>{category}</p>
                <button className = 'main-button' onClick={() => props.handleAddProduct(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;
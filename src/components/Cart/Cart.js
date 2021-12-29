import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const totalPrice = props.cart.reduce((total, prd)=> total + prd.price, 0).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item ordered: {props.cart.length}</p>
            <p>Total: {totalPrice}</p>
            {/* <button onClick = {}>Review</button> */}
        </div>
    );
};

export default Cart;
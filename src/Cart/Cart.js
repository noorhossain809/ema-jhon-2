import React from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd)=> total + prd.price * prd.quantity, 0);

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2)
    const numberConvert = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <div className="align-items-center justify-content-center">
            <h3 className="subtotal">Order summery</h3>
            <h4>Items ordered : {cart.length}</h4>
            </div>
            <p>Items: {numberConvert(total)}</p>
            <p>Shipping & Handing: {shipping}</p>
            <p>Total before tax: {numberConvert(total + shipping)}</p>
            <p>Estimated Tax: {tax}</p>
            <p className="subtotal" variant="danger">Order Total: {grandTotal}</p>
            <Link to="/review">
            <Button className="" variant="warning">Review your order</Button>
            </Link>
            
        </div>
    );
};

export default Cart;
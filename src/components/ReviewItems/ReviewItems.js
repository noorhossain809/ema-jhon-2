import React from 'react';
import { useState } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import Cart from '../../Cart/Cart';


const ReviewItems = (props) => {

    const [cart, setCart] = useState([])
    // console.log(props);
    const { name, quantity, img, seller, price, stock, key } = props.product;
    return (
        <div>
            <div className="p-3 product-details">
            <CardGroup>
                <div className="d-flex py-2">
                    <div className="col-md-4">
                        <Card.Img variant="top" src={img} className="img" />
                    </div>
                    <div className="col-md-8 p-3">
                        <Card.Body>
                            <Card.Text className="description">{name}</Card.Text><p>by: {seller}</p>
                            <h4>$ {price}</h4>
                            <p>only {stock} left in stock-order soon</p>
                            <h4>Quantity: {quantity}</h4>
                        </Card.Body>
                        <Button variant="warning" onClick={() => props.handleRemoveCart(key)}>Remove</Button>
                    </div>
                </div>
            </CardGroup>
        </div>
            </div>
        
    );
};

export default ReviewItems;
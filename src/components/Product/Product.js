import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  // const {key} = useParams()
   console.log(props);
  const { name, img, seller, stock, price, key } = props.product;
  return (
    <div className="d-flex p-3 product-details">
      <CardGroup>
        
            <div className="d-flex py-2">
                <div className="col-md-4">
                <Card.Img variant="top" src={img} className="img" />
                </div>
           <div className="col-md-8 p-3">
           <Card.Body>
             <Link to={"/product/"+key}>
             <Card.Text className="description">{name}</Card.Text>
             </Link>
            
            <p>by: {seller}</p>
            <h4>$ {price}</h4>
            <p>only {stock} left in stock-order soon</p>
          </Card.Body>
          {props.shoawAddToCart && 
            <Button onClick={() => props.handleClick(props.product)} className="" variant="warning"><FaShoppingCart className="icons" /> add to cart</Button>
            }
           </div>
          
          
            </div>
          
            
      </CardGroup>
    </div>
  );
};

export default Product;

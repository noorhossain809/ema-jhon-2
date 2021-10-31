import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "../../Cart/Cart";
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import Product from "../Product/Product";
import './Shop.css'

const ShopingCart = () => {
  // console.log(fakeData);
  // const fullData = fakeData.slice(0, 81);
  const [product, setProduct] = useState(fakeData);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart)
    const previousCart = productKeys.map(existingKey => {
      const product = fakeData.find(pd => pd.key === existingKey)
      product.quantity = savedCart[existingKey]
      return product;
    })
   setCart(previousCart);
  }, [])

  const handleClick = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
    const sameProduct = newCart.filter(pd => pd.key === product.key)
    const counts = sameProduct.length
    addToDatabaseCart(product.key, counts)
   
  }
  return (
    <div className="container p-3 d-flex ">
      <div className="col-md-9 p-3 product-container">
        <div className="">
          {product.map((pd) => (
            <Product shoawAddToCart={true} handleClick={handleClick} product={pd} ></Product>
          ))}
        </div>
      </div>
      <div className="col-md-9 p-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ShopingCart;

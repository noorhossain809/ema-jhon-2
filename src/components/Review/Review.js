import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../../Cart/Cart';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
   const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product;
            
        })
        setCart(cartProducts)
        
    },[])

    const handleRemoveCart = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="d-flex container">
            <div className="col-md-9">
            {
                cart.map(pd => <ReviewItems
                     product={pd}
                     handleRemoveCart={handleRemoveCart}
                     >

                     </ReviewItems>)
            }
            </div>
            <div className="col-md-9">
            <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Review;
import React from 'react';
import'./Cart.css'

const Cart = ({cart}) => {
    const {name,id,img,price} = cart;
    
    console.log({});
    return (
        
        <div className="cart">
          <div className="cart-info">
          <img src={img} alt="" />
            <h3>Name {name} </h3>
            <h4>Price : ${price}</h4>
            <h4>id : {id}</h4>
          </div>
            
            

        </div>
        
        
        
    );
    
};

export default Cart;
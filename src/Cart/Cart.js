import React from 'react';
import'./Cart.css'

const Cart = ({cart}) => {
    const {name,id,img,price} = cart;
    
    console.log({});
    return (
        
        <div className="cart">
          <img src={img} alt="" />
          <div className="cart-info">
          
            <h3><small className="color">Name : </small>{name} </h3>
            <h4><small className="color">Price : </small>${price}</h4>
            <h4><small className="color">ID : </small> {id}</h4>
          </div>
            
            

        </div>
        
        
        
    );
    
};

export default Cart;
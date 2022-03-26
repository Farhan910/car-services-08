import React from "react";
import "./Main.css";

const Main = ({ carData ,AddToCartHandler }) => {
  const { name, id, img,price } = carData;
  
  return (
    <div>
      <div className="cart-container">
      <div className="card">
        <img src={img} alt="" />
        <div className="car-info">
        <h2>name : {name}</h2>
        <p>ID : {id}</p>
        <p> Price : ${price}</p>
        </div>
        <div>
          <button onClick={ () => AddToCartHandler(carData)} className="btn-cart">Add to cart </button>
        </div>
        
      </div>
      </div>
      
      
      
    </div>


    
  );
};

export default Main;

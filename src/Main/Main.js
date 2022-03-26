import React from "react";
import "./Main.css";
import { BsCartCheck } from 'react-icons/bs';


const Main = ({ carData ,AddToCartHandler }) => {
  const { name, id, img,price } = carData;
  
  return (
    <div>
      <div className="cart-container">
      <div className="card">
        <img src={img} alt="" />
        <div className="car-info">
        <h2>Name : {name}</h2>
        <p>ID : {id}</p>
        <p> Price : ${price}</p>
        </div>
        <div>
          <button onClick={ () => AddToCartHandler(carData)} className="btn-card"><h3 className="icon-name">Add to cart <small><BsCartCheck/></small></h3> </button>
        </div>
        
      </div>
      </div>
      
      
      
    </div>


    
  );
};

export default Main;

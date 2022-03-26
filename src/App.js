import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import { FcAcceptDatabase } from 'react-icons/fc';

function App() {
  const [cars, setCars] = useState([]);
  const [cart,setCart] = useState([]);
  

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCars(data));

  }, []);
  

  const AddToCartHandler = (car) =>{
    const isExist = cart.find(item => item.id === car.id)
    if(!isExist){
      const newCart = [...cart,car]
      setCart(newCart);
    }
    
    }
    
  
  return (
    <div className="main">

    
      <div className="cart-container">
      {cars.map((car) => (
        <Main key={car.id} carData={car} AddToCartHandler={AddToCartHandler}/>
        
        
      ))}
      
      </div>
      

      <div>
        {cart.map((item) => (
          
          <Cart key={item.id} cart={item}/>
          
         
        ))}
        <button className="btn-edit">Choose one for me <small><FcAcceptDatabase/></small> </button>
        
        <div>
         
        </div>
        
      </div>
    
    </div>

    
    
  );
}

export default App ;

import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";

function App() {
  const [cars, setCars] = useState([]);
  const [cart,setCart] = useState([]);
  

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCars(data));

  }, []);
  

  const AddToCartHandler = (car) =>{
     const newCart = [...cart,car]
    setCart(newCart);
    if (newCart.length > 4) {
      alert('sdsad');
      
      
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
        <button  className="btn-edit">choose one for me </button>
        
        
        
      </div>
    
    </div>

    
    
  );
}

export default App ;

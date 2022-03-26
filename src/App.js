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
      console.log(newCart);
    }
    
    }

    const handleDelete = () => {
      const newOne = [];
      setCart(newOne);
  
    }
    const handleUpdate = () => {
      Math.floor(Math.random(cart) *1);
      return(
        setCart(cart)
      )
      
      
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
        <button onClick={() =>handleUpdate()} className="btn-cart">Choose one for me <small><FcAcceptDatabase/></small> </button>
        <button onClick={() => handleDelete()} className="btn-cart">Choose again <small><FcAcceptDatabase/></small> </button>
        
        
        
      </div>
      <div className="answers">
         <h2>জাভাস্ক্রিপ্ট রিয়েক্ট কিভাবে কাজ করে  ?</h2>
        <h4>আমরা প্রথমে Components নামে একটা জিনিস লিখি যেটা কে সিম্পল ভাবে কোড বলা হয় . 
          সেই কোড গুলা কে রিয়েক্ট UI  তে দেখানোর জন্য সেটা কে HTML এ Convirt করে . তারপর সেটা কে UI তে দেখায়. আর সেই UI তে দেখানোর আগে সেটা কে HTML এ Convert করতে React Dom কাজ করে ।
          এবং রিয়েক্ট ইউজ করার আসল দিক টা হলো সেটা খুব দ্রুত কোড গুলা কে  Compiled করে UI তে দেখায় . 
        </h4>


        <h2>Props আর State এর মধ্যে পার্থক্য কি   ?</h2>
        <h4>Props : এটা একটা Component থেকে আরেকটা Component এ ডাটা পাঠায় ,এবং টা অপরিবর্তনযোগ্য,সেটা শুধু পড়ার জন্য ,সেটা তে ইডিত করা বার লেখার জন্য না ।সেগুলো কে সংসোধন করা যায় না ।</h4>


        <h4>State : এটা হলো পরিবর্তনশীল ,এটা একটা Application থেকে আরেকটা Application এ ডাটা পাঠায়. প্রত্যেক টা Component এর State থাকতে পারে । এবং তা চাইলে মন মত পরিবর্তন ও করা যাবে কিন্তু Props যাবে না । </h4>




        </div>
    
    </div>
    

    
    
  );
  
}

export default App ;

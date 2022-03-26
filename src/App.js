import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import { FcAcceptDatabase } from 'react-icons/fc';

function App() {
  const [cars, setCars] = useState([]);
  const [cart,setCart] = useState([]);
  <h1>this is a car shop</h1>
  

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
    if(cart.length >= 4){
      alert('This is out of the cart')
    }
    
    }

    const handleDelete = () => {
      const newOne = [];
      setCart(newOne);
  
    }
    const handleUpdate = () => {
      const random = cart[Math.floor(Math.random()* cart.length)];
      const newCart = [random]
      setCart(newCart);
     
    }
    
  
  return (

    
    <div >
    <div>
          <Header/>
     </div>
    
    <div className="main" >
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


        <h2>UseState কিভাবে কাজ করে    ?</h2>
        <h4>এটা একটা হুক যাত মধ্যে কিছু ভ্যালু স্টোর করা থাকে ,যদি কোন initial ভ্যালু কে ফাঙ্কশনের কাছে পাঠানো হয় তখন তা একটা variable এবং সাথে সাথে Current ভ্যালু ও রিটার্ন করে. এবং অন্য ফাঙ্কশনের কাজ হলো তার ভ্যালু টা আপডেট করা . </h4>


        </div>
    
    </div>
    

    
    
  );
  
}

export default App ;

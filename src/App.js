import React, {useState, useEffect} from 'react'
import ShopBox from "./container/ShopBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import NavBar from './components/Navbar';
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [user, setUser] = useState({
    name: "Big Bob",
    basket: [],
  });
  
  const obj = {
    "Can't Believe Its Not Bob": "Can't Believe Its Not Bob",
    'Bob.Random': 'Bob.Random',
    "Big Bob's Kennel of Bobs": "1",
    "Scuffed APp" : "scuffed",
    "working as intended": "scuffed",
    "Error 404": "help"
  };
  
  function getRandomProperty(obj) {
    const keys = Object.keys(obj);
  
    setName(keys[Math.floor(Math.random() * keys.length)]);
  }
  
useEffect(() => {
  getRandomProperty(obj)
  },[user.basket])



  return (
    <>
    <h1>{name}</h1>
  <Router>
    <NavBar />

  <Routes>
    <Route exact path="/" element={< ShopBox user={user} setUser={setUser}/>} />
    <Route exact path="/checkout" element={< Checkout user={user}/>} />
    <Route exact path="*"></Route>
  </ Routes>
  
</Router>
</>
  );
}

export default App;

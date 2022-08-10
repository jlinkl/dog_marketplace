import React, { useEffect, useState } from "react";
import DogContainer from "../components/DogContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const ShopBox = ({user, setUser}) => {


  const [dogList, setDogList] = useState([
    {
      name: "Bob",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/16BB/production/_106591850_untitleddesign-3.jpg",
    },
    {
      name: "Scott",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://www.allthingsdogs.com/wp-content/uploads/2020/09/Large-Dog-Breeds-678x381.png",
    },
    {
      name: "Cal",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://media.istockphoto.com/photos/fat-beagle-picture-id803485968?k=20&m=803485968&s=612x612&w=0&h=YhAKQFJLGq0FqE3tTiEf-3VOVLv6jWlZE0fPmL_nD-o=",
    },
    {
      name: "Lewis",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4C90afu25FrHQtxmGS59SkfFwc89pMZ8lw&usqp=CAU",
    },
    {
      name: "Bobbet",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTD561iY_Y7aPYQb-l0zDEFid2feIoHb8vw&usqp=CAU",
    },
    {
      name: "Bobby",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPUy1rK_zHGxf_rxy_g6J3Eb-le_zVVbZDQ&usqp=CAU",
    },
    {
      name: "Bob jr",
      price: Math.random(5, 121).toFixed(2),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V7VPFz9zrDtQpisjRAqspLgw6_y3E_R9Wg&usqp=CAU",
    },
    {
      name: "Bo bob",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACJfIfy3XDhgNAuuuNhWTJwVf-2QPAzFH4Q&usqp=CAU",
    },
    {
      name: "Bob sr",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCP3xwFHKsCpxyKlLg3iwpfRJtwd69NM4Urg&usqp=CAU",
    },
    {
      name: "Mrs bob",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://static.boredpanda.com/blog/wp-content/uploads/2020/05/This-dog-is-captivating-people-with-its-long-snout-and-it-can-become-a-world-record-holder-5ecf699b59df9__700.jpg",
    },
    {
      name: "Sir Bob the 4th",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pug-fattest-dogs-1600394338.jpg",
    },
    {
      name: "Boblet",
      price: (Math.random(5, 121) * 100).toFixed(2),
      img: "https://i1.sndcdn.com/avatars-O6N3M1oW1PAw5UVz-RucxOQ-t500x500.jpg",
    },
  ]);

  const addToBasket = (dog) => {
    let unSortedList = [...user.basket];
    unSortedList.push(dog);
    let dogList = [...new Set(unSortedList)];
    setUser({
      name: user.name,
      basket: dogList,
    });
  };



  return (
<div>

    <div>
      <h3>{user.name}</h3>
      <h4>Basket: {user.basket.length}</h4> 
      <DogContainer addToBasket={addToBasket} dogs={dogList}></DogContainer>
    </div>



</div>

  );
};
export default ShopBox;

// npm install react-router-dom

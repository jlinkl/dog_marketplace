import React from 'react'
import DogItems from './DogItems'

const DogContainer = (({dogs, addToBasket}) => {

const dogsNodes = dogs.map((dog, index) => {
    return <DogItems dog={dog} name={dog.name} price={dog.price} img={dog.img} key={index} addToBasket={addToBasket}></DogItems>
})
  return (
    <ul className="list-dogs">
        {dogsNodes}
    </ul>
    
  )
})

export default DogContainer
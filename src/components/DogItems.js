import React from 'react'

const DogItems = ({addToBasket ,name, price, img, key, dog}) => {

    const handleClick = () => {
        addToBasket(dog)
    }

  return (
    <li className="dog" key={key} >
        <img src={img}/>
        <p>{name}</p>
        <p>£{price}</p>
        <button onClick={handleClick} value={dog}>Add to Basket</button>
    </li>
  )
}

export default DogItems
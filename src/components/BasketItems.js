import React from 'react'

const BasketItems = ({item}) => {

  return (
    <li className="dog checkout" key={item.key} >
        <img src={item.img} width='100' height='100'/>
        <p>{item.name}</p>
        <p>£{item.price}</p>
</li>
  )
}

export default BasketItems
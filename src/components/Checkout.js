import React from 'react'
import BasketItems from './BasketItems'

const Checkout = ({user}) => {

    const initialValue = 0;
    const total = user.basket.reduce((runningTotal, item) => runningTotal + parseFloat(item.price), initialValue);

    const  basketNode = user.basket.map((item, index) => {
        return <BasketItems item={item} key={index}></BasketItems>
    })
  return (
<div>
   <ul className="list-dogs checkout">
        {basketNode}
   </ul>
   <h4>Total Price is: £{total}</h4>
</div>
  )
}

export default Checkout
import React, { useContext, useState } from 'react';
import { Context } from '../Contexts/context';
import Checkout from './checkout';
import uuid from 'uuid/v1';

const Cart = () => {

    const {  cart, removeFromCart, clear, closeCart } = useContext(Context);
    const [checkout, setCheckout] = useState(false) 
    const showCheckout = () =>{
        setCheckout(true)
    }
    const closeCheckout = () => {
        setCheckout(false)
      }
      let empty;
      if(cart.added.length===0){
       empty = <p>Your Cart is Empty</p>
    }
   let pay;
    if(cart.added.length>0){
    pay = <button onClick={showCheckout} className="myButton">Checkout</button>
}
    return (
        <div className='cart'>
        <button onClick={closeCart} className="close">x</button>
        <h2>Selected Tours</h2>
        {empty}
        <ul>
            {
                cart.added.map(element => {
                return <li key={uuid()}>
                <p>{element.country}</p>
                <p>{element.price} $</p>
                <button className="cartRemove" onClick={()=> removeFromCart(element)}>x</button>
                </li>
                })
            }
        </ul>
        <p>Total Price: {cart.total} $</p>
       <button onClick={clear} className="myButton">Empty Cart</button>
       {pay}
       {checkout&&<Checkout checkout={closeCheckout} />}
        </div>
    )
}

export default Cart;
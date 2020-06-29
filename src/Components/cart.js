import React, { useContext } from 'react';
import { Context } from '../Contexts/context';
import uuid from 'uuid/v1'

const Cart = () => {

    const {  cart, removeFromCart, clear, closeCart } = useContext(Context);
   
    return (
        <div className='cart'>
        <button onClick={closeCart} className="close">x</button>
        <h2>Selected Tours</h2>
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
        </div>
    )
}

export default Cart;
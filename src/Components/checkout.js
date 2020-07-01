import React, { useContext, useState } from 'react';
import { Context } from '../Contexts/context';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Checkout = ({checkout}) => {
    const [customer,setCustomer] = useState(true)
   const [goToPayment, setGoToPayment] = useState(false)
   const [success, setSuccess] = useState(false)
   const [customerDetails, setDetails] = useState({name: '', email: ''})
  
    const {  cart, clear } = useContext(Context);
   
    const moveToPay = (e) => {
        setCustomer(false)
        e.preventDefault()
        setGoToPayment(true)
    }
    const successPage = () => {
        clear()
        setSuccess(true)
        setGoToPayment(false)
    }
    const changeName = (e) =>{
        setDetails({name: e.target.value, email: customerDetails.email})
    }
    const changeMail = (e) => {
        setDetails({name: customerDetails.name, email: e.target.value})
    }

    const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  let payment
  if(number!==''&&name!==''&&expiry!==''&&cvc!==''&&focus!==''){
    payment = <button onClick={successPage} className="myButton">Pay</button>
  }
  else {
   payment = <button className="myButton">Pay</button>
  }

    return (
        <div className='checkout'>
          <button onClick={checkout} className="close">x</button>
            {customer&&<div className="customerDetails">
              <h3>Your Personal Details</h3>
            <form onSubmit={moveToPay}>
            <input placeholder="Enter Your Name" type="text" required onChange={changeName}></input>
            <input placeholder="Enter Your E-mail" type="email" required onChange={changeMail}></input>
            <button className="myButton">Proceed</button>
            </form>
            </div>}
            {goToPayment&&<div className="customerDetails">
            <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <h3>Your Credit Card Details</h3>
      <form>
        <input
          type='tel'
          name='number'
          placeholder='Card Number'
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type='text'
          name='expiry'
          placeholder='MM/YY Expiry'
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input
          type='tel'
          name='cvc'
          placeholder='CVC'
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
      </form>
            {payment}
            <h3>Your total:  {cart.total} $</h3>
            </div>}
            {success&&<div className="customerDetails">
    <p>Great Job {customerDetails.name} We sent confirmation e-mail to {customerDetails.email}!</p>
            </div>}
        
        </div>
    )
}

export default Checkout;
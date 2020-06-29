import React, { useContext} from 'react';
import { Context } from '../Contexts/context';

const TripPage = () => {

    const { buyTrip, addToCart, removeFromPage, cart, closeYourTrip } = useContext(Context);

    let button
    if(cart.added.length>0){
        if (cart.added[cart.added.length-1].country!==buyTrip.country){
        button = <button onClick={addToCart} className="myButton">Add</button>
    }
    else {
        button = <button onClick={removeFromPage} className="myButton">Remove</button>}
    }
    else {button = <button onClick={addToCart} className="myButton">Add</button>}
    return (
        <div className="tripPage">
            <button onClick={closeYourTrip}  className="close">x</button>
           <div className="tripDetail">
                <img src={buyTrip.image} alt="" height='420vh' width='420vw'/>       
        <div>
         <h1>{buyTrip.country}</h1>
         <p>{buyTrip.description}</p>
        <p>{buyTrip.price} $</p>
        {button}
        </div>
        </div>
        </div>
    )
}

export default TripPage;
import React, {useContext} from 'react';
import { Context } from '../Contexts/context';
import Continents from './continents';
import SelectedContinent from './selectedContinent';
import TripPage from './tripPage';
import Cart from './cart';


const Wrapper = () => {
  const { cart, showContinent, showCart, showTrip, selectCart } = useContext(Context);
  return (
    <div>
      <nav>
    <h1>SUNNY TOURS</h1>
    <img src={require('./Assets/cart.png')} alt='' height='50vh' width='50vw' onClick={selectCart}/>
      <p onClick={selectCart}>{cart.added.length}</p>
      </nav>
         <Continents />
         {showContinent&&<SelectedContinent />}
         {showTrip&&<TripPage />}
         {showCart&&<Cart />}
    </div>
  );
}

export default Wrapper;
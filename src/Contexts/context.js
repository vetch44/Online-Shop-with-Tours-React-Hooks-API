import React, { createContext, useState, useEffect } from 'react';
import firebase from '../config';

export const Context = createContext();

const ContextProvider = (props) => {

  const [showCart, setShowCart] = useState(false)
  const [showContinent, setShowContinent] = useState(false)
  const [showTrip, setShowTrip] = useState(false)

const selectCart = () => {
  setShowCart(!showCart)
}
const selectContinentTrips = () => {
  setShowContinent(true)
}
const selectYourTrip = () => {
  setShowTrip(true)
}
const closeCart = () => {
  setShowCart(false)
}
const closeContinentTrips = () => {
  setShowContinent(false)
}
const closeYourTrip = () => {
  setShowTrip(false)
}
     const [lists, setLists] = useState([])
     const [newContinent, setNewContinent] = useState([])
     const [buyTrip ,setBuy] = useState()

     const sale = (el) => {
       setBuy(el)
       selectYourTrip()
     }
      

        
    useEffect(() => {
        firebase
          .firestore()
          .collection("holiday")
          .onSnapshot(snapshot => {
            const lists = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }))
            setLists(lists)
          })
      }, [])
        
  const pickContinent = () => {
    setNewContinent(lists.filter(cont => cont.continent==='North America')) 
    selectContinentTrips() }
  const chooseContinent = () => {
    setNewContinent(lists.filter(cont => cont.continent==='Asia'))
    selectContinentTrips()
  }
  const chooseEurope = () => {
    setNewContinent(lists.filter(cont => cont.continent==='Europe'))
    selectContinentTrips()
  }
  const chooseAfrica = () => {
    setNewContinent(lists.filter(cont => cont.continent==='Africa'))
    selectContinentTrips()
  }

  const [cart, setCart] = useState({total: 0, added: []})

const addToCart = () => {
    setCart({total: cart.total + buyTrip.price, added: [...cart.added, buyTrip]})
}
const removeFromCart = (element) => {
  setCart({total: cart.total - element.price, added: cart.added.filter(product => product.country !== element.country)})
}
const removeFromPage = () => {
  setCart({total: cart.total - buyTrip.price, added: cart.added.filter(product => product.country !== buyTrip.country)})
}
const clear = () => {
  setCart({total: 0, added: []})
}
return (
    <Context.Provider  value={{
        lists, pickContinent, newContinent, sale, buyTrip, addToCart, cart, removeFromCart, chooseContinent, chooseEurope, clear, showCart, showContinent, showTrip, selectCart, selectContinentTrips, selectYourTrip, closeCart, closeContinentTrips, closeYourTrip, chooseAfrica, removeFromPage
    }}>
        {props.children}
      </Context.Provider>
)
}

export default ContextProvider;
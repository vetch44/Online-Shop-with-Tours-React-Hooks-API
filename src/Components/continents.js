import React, { useContext } from 'react';
import { Context } from '../Contexts/context';


const Continents = () => {
    
    const { pickContinent, chooseContinent, chooseEurope, chooseAfrica } = useContext(Context);

    return (
        <div className="continentList">
            <div onClick={chooseEurope} className="Europe">Europe</div>
            <div onClick={chooseContinent} className="Asia">Asia</div>
            <div onClick={pickContinent} className="NAmerica">North America</div>
            <div onClick={chooseAfrica} className="Africa">Africa</div>
            
        </div>
    )
}

export default Continents;
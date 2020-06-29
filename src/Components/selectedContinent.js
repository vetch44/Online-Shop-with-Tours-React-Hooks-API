import React, { useContext} from 'react';
import { Context } from '../Contexts/context';
import uuid from 'uuid/v1'

const SelectedContinent = () => {

    const { newContinent, sale, closeContinentTrips } = useContext(Context);
   
    return (
        <div className="tripList">
            <button onClick={closeContinentTrips}  className="close">x</button>
           <ul>
                {
                    newContinent.map(el => {
                    return   <li key={uuid()} onClick={() => sale(el)}>
                   <div>
                    <img src={el.image} alt="" height='280vh' width='280vw'/>
                    <h1>{el.country}</h1>
                    <p>{el.shortDescription}</p>
                    <p>{el.price} $</p>
                    </div>
                    </li>
                    })
                }
            </ul>
        
        </div>
    )
}

export default SelectedContinent;
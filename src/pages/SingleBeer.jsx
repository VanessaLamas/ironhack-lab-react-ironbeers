import React from "react";

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function SingleBeer () {
    const { beerId } = useParams();
    const [beer , setBeer] = useState({});
    useEffect( () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
          setBeer(response.data);
        console.log (setBeer)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [beerId]);
  

    
    return (
            <div key={beer._id} className="card">
             <h1>{beer.name}</h1>
            </div>
    )
}

export default SingleBeer;


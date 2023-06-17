import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
    const [beer, setBeer] = useState({});
    useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => {
          setBeer(response.data);
          console.log(setBeer)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div key={beer._id} className="card">
        <img src={beer.image_url} alt={beer.name}/>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.brewers_tips}</p>
        <p>{beer.contributed_by}</p>
      </div>
    )
  }

export default RandomBeer;

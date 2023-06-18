import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});
  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
        console.log(setBeer)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);
  return (
    <div key={beer._id} className="row gx-4 gx-lg-5 align-items-center m-5" style={{display:"flex", justifyContent:"space-evenly"}}>
    <div className="col-md-3">
      <img className="card-img-top mb-5 mb-md-0" style={{height:"25rem", width:"10rem"}} src={beer.image_url} alt={beer.name}/>
      </div>
      <div className="col-md-6">
      <h1 className="display-5 fw-bolder">{beer.name}</h1>
      <p><strong>Tagline:</strong> {beer.tagline}</p>
      <p><strong>First brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Attenuation:</strong> {beer.attenuation_level}</p>
      <p><strong>Brewers tips:</strong> {beer.brewers_tips}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
      </div>
    </div>
  )
}

export default SingleBeer;


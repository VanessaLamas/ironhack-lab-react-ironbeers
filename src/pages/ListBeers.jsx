import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function ListBeers() {
    const [beers, setBeers] = useState([])
    const fetchUserData = () => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBeers(data)
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div className="App">
            <div>
                {beers.length > 0 && (
                    <ul>
                        {beers.map(beer => (
                            <div key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} />
                            <Link to={beer._id}><li>{beer.name}</li></Link>
                            <li>{beer.tagline}</li>
                            <li>Created by: {beer.name}</li>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ListBeers;

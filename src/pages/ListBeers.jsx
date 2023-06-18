import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListBeers() {
    const [beers, setBeers] = useState([])
    const fetchAllBeersData = () => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBeers(data)
            })
    }
    useEffect(() => {
        fetchAllBeersData()
    }, [])
    return (
        <div classNameName="App">
            <div>
                {beers.length > 0 && (
                    <ul style={{ listStyle: "none", padding: 10, display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                        {beers.map(beer => (
                            <div key={beer._id}>
                            <div className="card" style={{width: "20rem", display: "flex", margin: "10px", flexDirection: "column", alignItems: "center"}}>
                            <img src={beer.image_url}  style={{margin: "10px", height: "13rem", width: "5rem"}} alt={beer.name}/>
                            <div className="card-body">
                            <li className="card-text m-1">{beer.tagline}</li>
                            <li className="card-text m-3">Created by: {beer.name}</li>
                            <Link className="btn btn-primary m-2" to={beer._id}><li className="card-title">{beer.name}</li></Link>
                            </div>
                            </div>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ListBeers;

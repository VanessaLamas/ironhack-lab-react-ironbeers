import React from "react";
import { useState } from 'react';
import axios from 'axios';

function NewBeer() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setBrewersTips] = useState('');
    const [attenuation_level, setAttenuationLevel] = useState('');
    const [contributed_by, setContributedBy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", data).then(() => {
            console.log('Property created');
            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationLevel('');
            setContributedBy('');
            // redirect to see all
            window.location = '/beers'; 
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="title">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </p>
                <p>
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" id="tagline" name="tagline"
                        value={tagline}
                        onChange={(e) => { setTagline(e.target.value) }}
                    />
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" 
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }}></textarea>
                </p>
                <p>
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input type="text" id="first_brewed" name="first_brewed"
                        value={first_brewed}
                        onChange={(e) => { setFirstBrewed(e.target.value) }}
                    />
                </p>
                <p>
                    <label htmlFor="brewers_tips">Brewers Tips</label>
                    <input type="text" id="brewers_tips" name="brewers_tips"
                        value={brewers_tips}
                        onChange={(e) => { setBrewersTips(e.target.value) }}
                    />
                </p>
                <p>
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input type="number" id="attenuation_level" name="attenuation_level"
                        value={attenuation_level}
                        onChange={(e) => { setAttenuationLevel(e.target.value) }}
                    />
                </p>
                <p>
                    <p>
                        <label htmlFor="contributed_by">Crontibuted By</label>
                        <input type="text" id="contributed_by" name="contributed_by"
                            value={contributed_by}
                            onChange={(e) => { setContributedBy(e.target.value) }}
                        />
                    </p>
                    <p></p>
                    <button type="submit">Add</button>
                </p>
            </form>
        </div>
    )
}

export default NewBeer;
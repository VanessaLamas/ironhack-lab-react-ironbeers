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
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="title">Name</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="tagline">Tagline</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text" id="tagline" name="tagline"
                            value={tagline}
                            onChange={(e) => { setTagline(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="description">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" name="description"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </div> </div>

                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="first_brewed">First Brewed</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="first_brewed" name="first_brewed"
                            value={first_brewed}
                            onChange={(e) => { setFirstBrewed(e.target.value) }}
                        />
                    </div> </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="brewers_tips">Brewers Tips</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="brewers_tips" name="brewers_tips"
                            value={brewers_tips}
                            onChange={(e) => { setBrewersTips(e.target.value) }}
                        />
                    </div> </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="attenuation_level">Attenuation Level</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="attenuation_level" name="attenuation_level"
                            value={attenuation_level}
                            onChange={(e) => { setAttenuationLevel(e.target.value) }}
                        />
                    </div> </div>
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label" htmlFor="contributed_by">Crontibuted By</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="contributed_by" name="contributed_by"
                            value={contributed_by}
                            onChange={(e) => { setContributedBy(e.target.value) }}
                        />
                    </div> </div>
                <button className="btn btn-primary m-2" type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewBeer;
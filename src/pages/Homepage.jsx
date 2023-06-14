import React from "react";

import { Link } from "react-router-dom";

import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function Homepage() {
    return (
        <div>
            <div>
                <img src={beersImage} alt="all beers" />
                <Link to="/beers"><h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus mi eu commodo varius. Aenean a leo sagittis, elementum turpis ac, interdum leo. Etiam neque dui, fringilla sit amet lacus quis, blandit imperdiet metus. Vivamus elementum nibh at gravida consequat. Duis est diam, facilisis in neque placerat, condimentum sodales neque. Donec tincidunt semper tincidunt. Nunc hendrerit mi massa, vitae gravida justo dignissim sed. Phasellus sed semper nisi. Aenean risus erat, blandit ac ipsum quis, accumsan dictum purus.</p>
            </div>
            <div>
                <img src={randomBeerImage} alt="random beers" />
                <Link to="/beers/random"><h1>Random Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus mi eu commodo varius. Aenean a leo sagittis, elementum turpis ac, interdum leo. Etiam neque dui, fringilla sit amet lacus quis, blandit imperdiet metus. Vivamus elementum nibh at gravida consequat. Duis est diam, facilisis in neque placerat, condimentum sodales neque. Donec tincidunt semper tincidunt. Nunc hendrerit mi massa, vitae gravida justo dignissim sed. Phasellus sed semper nisi. Aenean risus erat, blandit ac ipsum quis, accumsan dictum purus.</p>
            </div>
            <div>
                <img src={newBeerImage} alt="new beer" />
                <Link to="/new-beer"><h1>New Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus mi eu commodo varius. Aenean a leo sagittis, elementum turpis ac, interdum leo. Etiam neque dui, fringilla sit amet lacus quis, blandit imperdiet metus. Vivamus elementum nibh at gravida consequat. Duis est diam, facilisis in neque placerat, condimentum sodales neque. Donec tincidunt semper tincidunt. Nunc hendrerit mi massa, vitae gravida justo dignissim sed. Phasellus sed semper nisi. Aenean risus erat, blandit ac ipsum quis, accumsan dictum purus.</p>
            </div>
        </div>
    )
}

export default Homepage;
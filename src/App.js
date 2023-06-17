import './App.css';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/beers/random" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;

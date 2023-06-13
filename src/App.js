import './App.css';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;

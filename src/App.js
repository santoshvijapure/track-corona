import React from 'react';
import './App.css';
import World from './components/World'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
function App() {
  return (
    <div >
    <Navbar/>

    <World/>
    

    <Countries/>

    <Footer/>
    <h1> Go Corona !!! </h1>
    </div>
  );
}

export default App;

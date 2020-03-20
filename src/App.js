import React from 'react';
import './App.css';
import World from './components/World'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Image } from 'react-bootstrap';

import Coronaimg from "./unnamed.png";

function App() {
  return (
    <Container  className="">
    {/* <Navbar/> */}
    <h1 className="text-center"> CoronaVirus(COVID-19) Live Statistics</h1>
    {/* <img src={Coronaimg} alt="corona" className="rotate"></img> */}
    <Image src={Coronaimg}  fluid className="corona rotate"/>
    <World/>
    <br/>
    <Countries/>
    {/* <Footer/> */}
    <h1> Go Corona !!! </h1>
    </Container>
  );
}

export default App;

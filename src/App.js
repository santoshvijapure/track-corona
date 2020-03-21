import React from 'react';
import './App.css';
import World from './components/World'
import Footer from "./components/Footer";
import Countries from "./components/Countries";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container  } from 'react-bootstrap';


function App() {
  return (
    <div>
    <Container>
    {/* <Navbar/> */}
    <h1 className="text-center"> CoronaVirus(COVID-19) Live Statistics</h1>
    <hr/>
    <br/>
    <World/>
    <br/>
    <hr/>
    <br/>
    <h4>Search the Statistics by Country Name or <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" rel="noopener noreferrer" target="_blank"> ISO country codes</a></h4>
    
    <Countries/>

    </Container>
    <Footer/>
    </div>
    
  );
}

export default App;

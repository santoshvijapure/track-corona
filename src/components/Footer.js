import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <hr/>
            <footer className="" id="social">
            <div className="footer container">
               <h3>About this Data</h3>
                <h4>Data Source :  <a href="https://github.com/mathdroid/covid-19-api"> Muhammad Mustadi's </a> API (This API is based on WHO Data) </h4> 
                <b>It changes rapidly</b><br />

                This data changes rapidly, so what’s shown may be out of date. Table totals may not always represent an accurate sum. Information about reported cases is also available on the World Health Organization site.
                <br/><b>It doesn’t include all cases</b><br />
                Confirmed cases aren’t all cases. They only include people who tested positive. Testing rules and availability vary by country.
                Source

            <hr/>
        
        <div className="row">
            <div className="col-md-6">
                
        Copyright © 2020 : <a href="https://santoshvijapure.xyz">Santosh Vijapure</a>
        
            </div>
            <div className="col-md-6 text-right">
                made with ♥ and ReactJS
            </div>
        </div>
            </div>
        </footer>  
            </div>    
            )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import CountUp from 'react-countup';


export default class World extends Component {
    constructor(props) {
        super(props);
        this.state={
            deaths:0,
            confirmed:0,
            recovered:0
        }    
        
    }
    async componentDidMount(){

        await axios.get("https://covid19.mathdro.id/api/")
        .then(response=>{
            this.setState({
                    deaths: response.data.deaths.value,
                    confirmed: response.data.confirmed.value,
                    recovered: response.data.recovered.value
            })
            console.log('respone.data :', this.state);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
               <h1>Confirmed +ve  Cases : <CountUp end={this.state.confirmed} duration={3} /> </h1>
                <h1>Confirmed Deaths : <CountUp end={this.state.deaths} duration={3} /></h1>
                <h1>Confirmed Recoveies: <CountUp end={this.state.recovered} duration={3} /></h1>
            </div>
        )
    }
}

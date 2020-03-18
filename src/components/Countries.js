import React, { Component } from 'react'
import axios from "axios";
import CountUp from 'react-countup';


export default class Countries extends Component {

    constructor(props) {
        super(props);
        this.state={
            country:"India",
            deaths:0,
            confirmed:0,
            recovered:0
        }
    }
    
    handleChange = (e) => {        
        this.setState({
          country: e.target.value
      })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        axios.get("https://covid19.mathdro.id/api/countries/"+this.state.country)
        .then(response=>{
            this.setState({
                deaths: response.data.deaths.value,
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value
                 })
                 console.log(response.status)
        })
        .catch(err=>{
            alert("please enter the valid")
        })
    }
    componentDidMount(){
        axios.get("https://covid19.mathdro.id/api/countries/"+this.state.country)
        .then(response=>{
            this.setState({
                deaths: response.data.deaths.value,
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value
                 })
        })
    }
    render() {
        return (
            <div>
               
                <form onSubmit={this.handleSubmit}>
               <div className="row">
                    <div className="col-10">
                    <input className="form-control text-field mr-2" name="text" type="text"
                           placeholder="Enter / Paste the loooooong Link including the http or https"
                               onChange={this.handleChange}
                           />
                    </div>
                    <div className="col-2">
                    <input className="btn btn-primary" type="submit" value="shrink"/>
                    </div>
               </div>     
               </form>
               <div>
              
                <h1>Confirmed +ve  Cases : <CountUp end={this.state.confirmed} duration={3} /> </h1>
                <h1>Confirmed Deaths : <CountUp end={this.state.deaths} duration={3} /></h1>
                <h1>Confirmed Recoveies: <CountUp end={this.state.recovered} duration={3} /></h1>
            </div>
            </div>
        )
    }
}

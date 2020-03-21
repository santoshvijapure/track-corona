import React, { Component } from 'react'
import axios from "axios";
import CountUp from 'react-countup';
import { Form, Col,Row,Card, Button } from "react-bootstrap"

export default class Countries extends Component {

    constructor(props) {

        super(props);
        this.state={
            current:"India",
            country:"India",
            deaths:0,
            confirmed:0,
            recovered:0,
            show:false
        }
    }
    
    // on chnage 
    handleChange = (e) => {        
        this.setState({
          country: e.target.value
      })
    };
    // serch and find the coutry
    handleSubmit=(e)=>{
        e.preventDefault();

        axios.get("https://covid19.mathdro.id/api/countries/"+this.state.country)
        .then(response=>{
            this.setState({
                current:this.state.country,
                deaths: response.data.deaths.value,
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value
                 })
                 console.log(response.status)
        })
        .catch(err=>{
            alert("please enter the valid Country Name ")

        })
    }

   

    //componentDidMount 

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
            <div className="center text-">
                <form onSubmit={this.handleSubmit}>
                 <Form.Row>
                    <Col className="col-9">
                    <input className="form-control " name="text" type="text"
                           placeholder="Enter the country or country code"
                               onChange={this.handleChange} />
                    </Col>
                    
                    <Col className="col-3">
                    <Button className="btn btn-primary form-control" type="submit" >FIND</Button>
                    </Col>
               </Form.Row>     
               </form>
               <br/>


               <div>
                
               <Row className="text-center">
                    {/* Confirmed Cases */}
                   <Col xs="12" lg md="4"> 
                        <Card>
                            <Card.Header><h3>Confirmed</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className="stats">
                                    <CountUp end={this.state.confirmed} duration={3}/>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                      In <b>{this.state.current}</b>
                                </Card.Footer>
                        </Card>
                       
                        
                    </Col>
                    {/* Deaths */}
                   <Col xs="12" lg md="4"> 
                        <Card>
                            <Card.Header><h3>Died</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className="stats">
                                    <CountUp end={this.state.deaths} duration={3}/>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                   
                                        Death Rate : {Math.floor(this.state.deaths / this.state.confirmed * 100) + "%"}
                                   
                            </Card.Footer>   

                        </Card>
                       
                        
                    </Col>
                    {/* Receovery */}
                   <Col xs="12" lg md="4"> 
                        <Card>
                            <Card.Header><h3>Recovered</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className="stats">
                                    <CountUp end={this.state.recovered} duration={3}/>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                  
                                        Recovery Rate: {Math.floor(this.state.recovered / this.state.confirmed * 100)+ "%"}
                            </Card.Footer>
                        </Card>      
                    </Col>
                </Row>
                
             
            </div>
            </div>
        )
    }
}

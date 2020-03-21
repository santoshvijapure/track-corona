import React, { Component } from 'react'
import axios from 'axios'
import CountUp from 'react-countup';
import { Row,Col, Card } from "react-bootstrap";

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
            <div id="world">
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
                                      Gobally
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
        )
    }
}

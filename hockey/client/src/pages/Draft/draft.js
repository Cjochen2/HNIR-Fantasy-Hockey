/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import Teams from "../../components/Teams";
import Checkout from "../../components/Checkout";
import Grid, { Container, Row, Col } from "../../components/Grid";
import "./style.css";

class Draft extends Component {
    state = {
        players: [],
        
    }
    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();

    }
    
    componentDidMount() {
        API.load().then((response) => {
            if(response.data.notSignedIn) {
                this.props.history.push('/');
            } else {
                console.log("You're good.");
            }
        });

        API.getPlayers().then(players => {
            this.setState(
                { players: players.data }
            )
        })
    };

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }
    

    render() {
        

        return (


            <Wrapper>
                <Row >
            <Col size="md-12"><div className="rules"><img src={require("./images/hnir1.png")} className= "image" alt="logo"/><h1>Rules of the Draft:</h1><p className="p1">Welcome to the HNIR draft! When you are ready to selcet your team, you will pick one player from each team. Once you have selected your 5 players hit the "Buy team" button at the bottom of the page to purchase your team. Fill out all of the necessary fields and once complete,you will be ready to climb the ranks to be crowned fanasty champion!</p>
            
            </div></Col>
            <Col size="md-1" />
            <Col size="md-3" />
            </Row>
            <Row>
            <Col size="md-1" />
                <Col size="md-2">
                <Teams
                teamName= "Kelly's Heroes"
                    players={this.state.players} />
                    </Col>
                    <Col size="md-2">
                <Teams
                    teamName= "The Boys"
                    players={this.state.players} />
                    </Col>
                    <Col size="md-2">
                <Teams
                teamName= "Double Deuce"
                    players={this.state.players} />
                    </Col>
                    <Col size="md-2">
                <Teams
                teamName= "Cowley's Chaos"
                    players={this.state.players} />
                    </Col>
                    <Col size="md-2">
                <Teams
                teamName= "Buzzed Hockey Club"
                    players={this.state.players} />
                    </Col>
                <Col size="md-1" />
                </Row>
                <Row>
                <Checkout />
                </Row>
            </Wrapper>
        )
    }
}

export default Draft
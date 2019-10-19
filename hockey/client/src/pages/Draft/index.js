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
        team: [],
        teamNames: []
    }
    

    componentDidMount() {
        // API.load().then((response) => {
        //     if (response.data.notSignedIn) {
        //         this.props.history.push('/');
        //     } else {
        //         console.log("You're good.");
        //     }
        // });

        API.getPlayers().then(players => {
            this.setState(
                { players: players.data }
            )
        })
    };

    saveTeam(){
        console.log(this.state.team);
        
        API.saveTeam(this.state.team)
    }

    handleOptionChange(changeEvent) {
        let array = this.state.team;
        let teamNameArray = this.state.teamNames;
        if(this.state.teamNames.includes(changeEvent.target.name)) {
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                if(array[i].team === changeEvent.target.name) {
                    console.log(array[i].team);
                    console.log(changeEvent.target.name);
                    array.splice(i, 1);
                }
            }
            // array = array.filter(function( obj ) {
            //     return obj.team !== changeEvent.target.name;
            // });
            console.log(array);
        } else {
            teamNameArray.push(changeEvent.target.name);
        }
        array.push({team: changeEvent.target.name, id: changeEvent.target.id});

           
        this.setState({
            teamNames: teamNameArray,
            team: array
        });
        
    }


    render() {


        return (


            <Wrapper>
                    <Col size="md-12">
                        <div className="rules">
                            <img src={require("./images/hnir1.png")} className="image" alt="logo" /><h1>Rules of the Draft</h1><p className="p1">Welcome to the HNIR draft! When you are ready to select your team, you will pick one player from each team. Once you have selected your 5 players hit the "Buy team" button at the bottom of the page to purchase your team. Fill out all of the necessary fields and once complete,you will be ready to climb the ranks to be crowned fanasty champion!</p>

                        </div>
                    </Col>
                <Row>
                    <Col size="md-1" />
                    <Col size="md-2">
                        <Teams
                            teamName="Kelly's Heroes"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)}
                            />
                    </Col>
                    <Col size="md-2">
                        <Teams
                            teamName="The Boys"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-2">
                        <Teams
                            teamName="Double Deuce"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-2">
                        <Teams
                            teamName="Cowley's Chaos"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-2">
                        <Teams
                            teamName="Buzzed Hockey Club"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-1" />
                </Row>
                <Row>
                    <Col size="md-12">
                        <Checkout
                        saveTeam={this.saveTeam} />
                    </Col>
                </Row>
            </Wrapper>
        )
    }
}

export default Draft
/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import DraftTeams from "../../components/DraftTeams";
import Checkout from "../../components/Checkout";
import { Row, Col } from "../../components/Grid";
import { Input, Message } from "../../components/Form"
import {Logout} from "../../components/Logout"
import Nav from "../../components/Nav"
import "./style.css";
class Draft extends Component {
    state = {
        players: [],
        team: [],
        teamNames: [],
        userTeam: "",
        submit: false
    }
    componentDidMount() {
        API.load().then((response) => {
            if (response.data.notSignedIn) {
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

    handleClick() {
        API.logout().then((response) => {
          if (response.data.signedOut) {
            this.props.history.push('/');
          };
        });
      };

    saveTeam() {
        console.log(this.state.team);
        if (this.state.team.length === 5 && this.state.userTeam) {
            API.saveTeam(this.state.team, this.state.userTeam).then((response) => {
                if (response.data.teamCreated) {
                    this.props.history.push('/home')
                } else {
                    console.log("Team not Created")
                }
            })
        }
    };

    handleOptionChange(changeEvent) {
        let array = this.state.team;
        let teamNameArray = this.state.teamNames;
        if (this.state.teamNames.includes(changeEvent.target.name)) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].team === changeEvent.target.name) {
                    console.log(array[i].team);
                    console.log(changeEvent.target.name);
                    array.splice(i, 1);
                }
            }
        } else {
            teamNameArray.push(changeEvent.target.name);
        }
        array.push({ team: changeEvent.target.name, id: changeEvent.target.id, points: changeEvent.target.value });
        this.setState({
            teamNames: teamNameArray,
            team: array
        });

        if (this.state.team.length === 5 && this.state.userTeam) {
            this.setState({
                submit: true
            })
        }

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        if (this.state.team.length === 5 && this.state.userTeam) {
            this.setState({
                submit: true
            })
        }
    };

    render() {
        return (
            <Wrapper>
                <div className="divWrap">
                <Nav onClick={this.handleClick.bind(this)}/>
                <Col size="md-12">
                    <div className="rules">
                        <img src={require("./images/hnir1.png")} className="image" alt="logo" /><h1>Rules of the Draft</h1><p className="p1">Welcome to the HNIR draft! When you are ready to select your team, you will pick one player from each team. Once you have selected your 5 players hit the "Buy team" button at the bottom of the page to purchase your team. Fill out all of the necessary fields and once complete,you will be ready to climb the ranks to be crowned fanasty champion!</p>
                    </div>
                </Col>
                <Row>
                    <Col size="md-1"></Col>
                    <Col size="md-2">
                        <DraftTeams
                            teamName="Kelly's Heroes"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)}
                        />
                    </Col>
                    <Col size="md-2">
                        <DraftTeams
                            teamName="The Boys"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-2">
                        <DraftTeams
                            teamName="Double Deuce"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-2">
                        <DraftTeams
                            teamName="Cowley's Chaos"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-2">
                        <DraftTeams
                            teamName="Buzzed Hockey Club"
                            players={this.state.players}
                            handleOptionChange={this.handleOptionChange.bind(this)} />
                    </Col>
                    <Col size="md-1"></Col>
                </Row>
                <Row>
                <Col size="md-5"/>
                    <Col size="md-2">
                        Team Name:
                    <Input
                            value={this.state.userTeam}
                            onChange={this.handleInputChange}
                            name="userTeam"
                            placeholder="Input Your Team Name"
                        />
                    </Col>
                <Col size="md-5"/>
                </Row>
                <Row>
                    <Col size="md-12">
                        {this.state.submit && <Checkout saveTeam={this.saveTeam.bind(this)} />}
                        {!this.state.submit && <Message message="Please make sure to have selected 1 player from each team and to have entered in a Team Name"/>}
                    </Col>
                    
                </Row>
                </div>
            </Wrapper>
        )
    }
}
export default Draft
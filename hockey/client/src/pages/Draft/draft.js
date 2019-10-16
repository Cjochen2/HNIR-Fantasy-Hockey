/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import cheerio from "cheerio";
import API from "../../utils/API";
import Teams from "../../components/Teams";
import Checkout from "../../components/Checkout";

class Draft extends Component {
    state = {
        players: [],
        
    }
    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();

    }
    
    componentDidMount() {
        API.getPlayers().then(players => {
            this.setState(
                { players: players.data }
            )
        })

        this.scrape()
    };

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }
    scrape() {
        const teams = [
            {
                id: 4909229,
                team: "The Boys"
            },
            {
                id: 4909227,
                team: "Buzzed Hockey Club"
            },
            {
                id: 4909228,
                team: "Cowley's Chaos"
            },
            {
                id: 4965687,
                team: "Double Deuce"
            },
            {
                id: 4909226,
                team: "Kelly's Heroes"
            }
        ]

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        for (var j = 0; j < teams.length; j++) {
            let globe = teams[j].id;
            let teamName = teams[j].team;

            axios.get(proxyurl + "https://www.hnir.net/stats/team_instance/" + globe + "?subseason=634286&tab=team_instance_player_stats&tool=3832997")
                .then(function (response) {

                    var $ = cheerio.load(response.data);

                    $("#player-sm-division-ice_hockey_skater-table").children('tbody').children('tr').each(function (i, element) {

                        let player = {
                            jerseyNumber: $(element).children(".jersey-number").text().trim() || null,
                            name: $(element).children(".statPlayer").text().trim(),
                            team: teamName,
                            gamesPlayed: $(element).children().eq(2).text().trim(),
                            goals: $(element).children().eq(3).text().trim(),
                            assists: $(element).children().eq(4).text().trim()
                        };
                        API.addPlayer(player);

                    });
                })
        }




    }

    render() {
        

        return (


            <Wrapper>
                <Jumbotron>Welcome to the Draft Page!</Jumbotron>
                <Teams
                    players={this.state.players} />
                <Checkout />
            </Wrapper>
        )
    }
}

export default Draft
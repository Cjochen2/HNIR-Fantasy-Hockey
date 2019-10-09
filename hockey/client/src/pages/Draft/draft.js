/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import cheerio from "cheerio";
import API from "../../utils/API";

class Draft extends Component {
    componentDidMount() {
        this.scrape();
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
        var results = [];
        for (var i = 0; i < teams.length; i++) {
            let globe = teams[i].id;
            //teamName = teams[i].team;

            axios.get(proxyurl + "https://www.hnir.net/stats/team_instance/" + globe + "?subseason=634286&tab=team_instance_player_stats&tool=3832997").then(function (response) {

                var $ = cheerio.load(response.data);

                $("#player-sm-division-ice_hockey_skater-table").children('tbody').children('tr').each(function (i, element) {

                    let player = {
                        jerseyNumber: $(element).children(".jersey-number").text().trim() || null,
                        name: $(element).children(".statPlayer").text().trim(),
                        //team: teamName,
                        gamesPlayed: $(element).children().eq(2).text().trim(),
                        goals: $(element).children().eq(3).text().trim(),
                        assists: $(element).children().eq(4).text().trim()
                    };
                    results.push(player);
                });
            })
        }
        API.updatePlayer(results);
    }

    render() {
        return (
            <Wrapper>
                <Jumbotron>Welcome to the Draft Page</Jumbotron>
                <div className="playerTable"></div>
            </Wrapper>
        )
    }
}

export default Draft
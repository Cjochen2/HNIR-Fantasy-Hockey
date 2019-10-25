import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import MyTeams from "../../components/MyTeams";
import Nav from "../../components/Nav"
import API from "../../utils/API";
import { Container } from "../../components/Grid";




class MyTeam extends Component {

    state = {
        myPlayers: [],
        allPlayers: [],
    }

    componentWillMount() {

        API.getUserTeams().then(teams => {
            this.setState(
                { myPlayers: teams.data }
            )
        }).then(() => {
            // this.test();
        })
    };

    // test() {
    //     let playerArr = [];
    //     let playerObj = [];
        
    //     for (let i = 0; i < this.state.myPlayers.length; i++) {
    //         let play = this.state.myPlayers;

    //         playerArr.push(play[i].player1)
    //         playerArr.push(play[i].player2)
    //         playerArr.push(play[i].player3)
    //         playerArr.push(play[i].player4)
    //         playerArr.push(play[i].player5)
    //     }

    //     playerArr.forEach(function (player) {
    //         API.getMyTeams(player).then(player => {
    //             playerObj.push(player.data)   
    //         })

    //     })
    //     console.log("Page:")
    //     console.log(playerObj)
    //     this.setState(
    //         { allPlayers: playerObj }
    //     );
    // };

    handleClick() {
        API.logout().then((response) => {
            if (response.data.signedOut) {
                this.props.history.push('/');
            };
        });
    };


    render() {
        return (
            <Wrapper>
                <Nav onClick={this.handleClick.bind(this)} />
                <Container>
                    <MyTeams
                        myteam={this.state.myPlayers}
                        // myplayers={this.state.allPlayers} 
                        />

                </Container>
            </Wrapper>
        )
    }

}

export default MyTeam

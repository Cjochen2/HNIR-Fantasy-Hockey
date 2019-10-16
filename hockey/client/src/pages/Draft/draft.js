/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
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
                <Teams
                    players={this.state.players} />
                <Checkout />
            </Wrapper>
        )
    }
}

export default Draft
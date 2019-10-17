/* eslint-disable no-loop-func */
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import cheerio from "cheerio";
import API from "../../utils/API";
import Teams from "../../components/Teams";
import StripeCheckout from 'react-stripe-checkout';


class Draft extends Component {
    state = {
        players: [],
    }
    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();

    }
    onToken = (token, addresses) => {
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
    };
    componentDidMount() {
    
        API.getPlayers().then(players => {
            console.log(players.data)
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
                <StripeCheckout
                    stripeKey="pk_test_EeJm8Zn4FGm23tcNeFpqUFed00FFEazVf1"
                    token={this.onToken}
                    amount="500"
                    description="Fanasty Hockey Team"
                    label="Purchase Team"
                    locale="auto"
                    name="HNIR Fanasty Hockey"
                    zipCode
                />
            </Wrapper>
        )
    }
}

export default Draft
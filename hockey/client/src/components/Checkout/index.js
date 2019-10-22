import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeApiKey = "pk_test_EeJm8Zn4FGm23tcNeFpqUFed00FFEazVf1";
class Checkout extends Component {
  state = {
    product: "Fantasy Hockey Team",
    show: true
  };

  handleClose = () => {
    console.log("App#handleClose");
  };

  handleOpen = () => {
    console.log("App#handleOpen");
  };

  handleProductChange = evt => {
    this.setState({ product: evt.target.value });
  };

  toggleShow = () => {
    this.setState(state => ({
      show: !state.show
    }));
  };
  
  handleToken = (token, addresses) => {
    console.log("App#handleToken");
    console.log(token);
    console.log(addresses);
    const { product } = this.state;

    const body = new FormData();
    // Send information to determine how to charge customer:
    body.append("product", product);
    body.append("quantity", 1);

    // Send standard Stripe information:
    body.append("stripeEmail", token.email);
    body.append("stripeToken", token.id);
    body.append("stripeTokenType", token.type);

    body.append("stripeBillingName", addresses.billing_name || "");


    fetch("/charge", {
      method: "POST",
      body,
      mode: "no-cors"
    })
      .then(res => {
        console.log("response received");
        console.dir(res);
        return res.json();
      })
      .then(result => {
        console.log("result");
        console.log(result);
        this.props.saveTeam();
      })
      .catch(error => {
        console.log("error");
        console.error(
          error
        );
      });
  };

  render() {

    let amount = 500;
    let description = "Fanasty hockey team";
    let label = "Buy your team"

    return (
      <div className="App text-center">
        <StripeCheckout
          allowRememberMe={false}
          amount={amount}
          billingAddress
          closed={this.handleClose}
          description={description}
          label={label}
          locale="auto"
          name="HNIR Fanasty Hockey"
          opened={this.handleOpen}
          panelLabel="Buy Team For {{amount}}"
          stripeKey={stripeApiKey}
          token={this.handleToken}
          zipCode
        />
      </div>
    );
  }
}

export default Checkout;
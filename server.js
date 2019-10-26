require("dotenv").config();
const express = require("express");
const session = require("express-session")
const path = require("path");
const PORT = process.env.PORT || 3003;
const app = express();
const routes = require("./routes")
const db = require("./models");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const Stripe = require("stripe");
const uuidv4 = require("uuid/v4");
const cron = require("node-cron");
const scrape = require("./scripts/playerScrape");
// TODO: Configure with your test mode secret key.
const apiKeySecret = process.env.SECRET_TEST;
const stripe = Stripe(apiKeySecret);
const upload = multer();
const root = require('path').join(__dirname, 'client', 'build')
//Begin of stripe server
app.use(require("body-parser").text());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.user = { id: "asdfasdfasdfasdf" };
  next();
});

app.post("/charge", upload.none(), cors(), async (req, res) => {
  console.log(JSON.stringify(req.body));
  let error;
  let status = "failed";
  try {
    const {
      product,
      quantity,
      csrfToken,
      currency = "usd",
      description,
      stripeBillingAddressCity,
      stripeBillingAddressCountry,
      stripeBillingAddressLine1,
      stripeBillingAddressState,
      stripeBillingAddressZip,
      stripeBillingName,
      stripeEmail,
      stripeShippingAddressCity,
      stripeShippingAddressCountry,
      stripeShippingAddressLine1,
      stripeShippingAddressState,
      stripeShippingAddressZip,
      stripeShippingName,
      stripeToken,
      stripeTokenType
    } = req.body;
    // TODO: Assert not a CSRF.
    let amount = 500;
  
    // TODO: Lookup existing customer or create a new customer.
    // TODO: Save relevant billing and shipping address information.
    const customer = await stripe.customers.create({
      email: stripeEmail,
      source: stripeToken,
      metadata: {
        userId: req.user.id
      }
    });
    if (stripeTokenType === "card") {
      const idempotency_key = uuidv4();
      const charge = await stripe.charges.create(
        {
          amount,
          currency: currency,
          customer: customer.id,
          description: description
        },
        {
          idempotency_key
        }
      );
      console.log("charge:");
      console.log(JSON.stringify(charge));
    } else {
      throw Error(`Unrecognized Stripe token type: "${stripeTokenType}"`);
    }
    status = "success";
  } catch (err) {
    console.error(err);
    error = err;
  }
  res.json({ error, status });
});
//end of stripe server
app.use(cookieParser());
app.use(morgan('dev'));
app.use(session({
  key:'user_sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
// Clears the cookie in the browser
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});
// Send every request to the React app
// Define any API routes before this runs
app.use(routes);
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

// cron.schedule("10 * * * * *", function(){
//   console.log("-------------------------------");
//   console.log("Running Cron Job");
//   let playerArray = scrape.players()
//     console.log(playerArray)
  
// })
// {force: true} causes a hang up when attempting login or signup that requires you to cancel the action and attempt it again to work?
db.sequelize.sync({force: false}).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});




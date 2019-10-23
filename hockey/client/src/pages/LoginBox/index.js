import React, { Component } from 'react';
import axios from "axios";
import cheerio from "cheerio";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import API from '../../utils/API'
import "./style.css"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Jochen Bros Inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const styles = theme => ({
  body: {
    backgroundColor: theme.palette.common.white,
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
});



class SignIn extends Component {

  componentDidMount() {
    this.scrape();

    API.load().then((response) => {
      if (response.data.token) {
        this.props.history.push('/home');
      } else {
        console.log("No way");
      }
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
            let goals = $(element).children().eq(3).text().trim()
            let assists = $(element).children().eq(4).text().trim()
            let player = {
              jerseyNumber: $(element).children(".jersey-number").text().trim() || 0,
              name: $(element).children(".statPlayer").text().trim(),
              team: teamName,
              gamesPlayed: $(element).children().eq(2).text().trim(),
              goals: goals,
              assists: assists,
              points: parseInt(goals) + parseInt(assists)
            };
            API.addPlayer(player);

          });
        })
    }
  };


  render() {
    const { classes } = this.props;

    return (
      <div className="logPage">
        <Container component="main" maxWidth="xs">
          <div className="logIn">
            <CssBaseline />
            <div className={classes.paper}>

              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
        </Typography>
              <form className={classes.form} action="/login" method="POST" Validate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="user"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
          </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
              </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/registration" variant="body2">
                      Don't have an account? Sign Up
                </Link>
                  </Grid>
                </Grid>
              </form>

            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </div>
        </Container>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignIn);
// import React, { Component } from "react";
// import Wrapper from "../../components/Wrapper";
// import MyTeams from "../../components/MyTeams";
// import Nav from "../../components/Nav"
// import API from "../../utils/API";
// import { Container } from "../../components/Grid";




// class MyTeam extends Component {

//     state = {
//         myPlayers: [],
//         allPlayers: [],
//     }

//     componentDidMount () {

//         API.getUserTeams().then(teams => {
//             this.setState(
//               { myPlayers: teams.data }
//             );
//           });

        
          
//     }

//     handleClick() {
//         API.logout().then((response) => {
//           if (response.data.signedOut) {
//             this.props.history.push('/');
//           };
//         });
//       };


// render(){
//     return (
//         <Wrapper>
//             <Nav onClick={this.handleClick.bind(this)}/>
//             <Container>
//             <MyTeams
//              myteam ={this.state.myPlayers}
//              myplayers = {this.state.allPlayers} />
             
//              </Container>
//         </Wrapper>
//     )
// }

// }

// export default MyTeam

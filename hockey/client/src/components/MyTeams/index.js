import React from "react";

function MyTeams(props) {
    console.log(props.myteam)
    return (
        <div className="wrap">
            {
                (props.myteam.map((info, i) => {
                    return (
                        <div className="table">
                        <div className="table-title">
                            <h3>{info.teamName}</h3><h3>Total Points: {info.points}</h3>
                        </div>



                        <div className="userTeam-rankings">
                            <table>
                                <tr>
                                    <th className="list-header">#</th>
                                    <th className="list-header">Name</th>
                                    <th className="list-header">Team</th>
                                    <th className="list-header">Games Played</th>
                                    <th className="list-header">Goals</th>
                                    <th className="list-header">Assists</th>
                                    <th className="list-header">Points</th>
                                </tr>
                            {
                                (props.myplayers.map((info, i) => {
                                    <tr>
                                    <th>{info.jerseyNumber}</th>
                                    <th>{info.name}</th>
                                    <th>{info.team}</th>
                                    <th>{info.gamesPlayed}</th>
                                    <th>{info.goals}</th>
                                    <th>{info.assists}</th>
                                    <th>{info.points}</th>
                                    </tr>
                                }))
                            }
                                
                            </table>
                        </div>
                        </div>
                        )
                }
                )
                )
            }

        </div>
    );
}

export default MyTeams;
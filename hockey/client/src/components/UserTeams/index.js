import React from "react";



function UserTeams(props) {
    return (
        <div className="team">
        <div className="table">
            <div className="table-title">
                <h3>{props.title}</h3>
            </div>

            <div className="userTeam-rankings">
                <table className="m-auto">
                    <tr>
                        <th className="list-header">Rank</th>
                        <th className="list-header">Name</th>
                        <th className="list-header">Points</th>
                    </tr>
                    {   
                        (props.teams.map((info, i) => {
                                return (<tr>
                                    <th>{i + 1}</th>
                                    <th>{info.teamName}</th>
                                    <th>{info.points}</th>
                                </tr>)
                            }
                        ))
                    }
                </table>
            </div>
        </div>
        </div>
    );
}

export default UserTeams;
import React from "react";


function Standings(props) {
    return (
        <div className="table">
            <div className="table-title">
                <h3>{props.title}</h3>
            </div>

            <div className="table-rankings">
                <table>
                    <tr>
                        <th className="list-header">Rank</th>
                        <th className="list-header">Name</th>
                        <th className="list-header">{props.rankings}</th>
                    </tr>
                    {
                        (props.standings.slice(0, 5).map((info, i) => {

                            if (props.rankings === "Goals") {
                                return (<tr>
                                    <th>{i + 1}</th>
                                    <th>{info.name}</th>
                                    <th className="stat">{info.goals}</th>
                                </tr>)
                            }

                            if (props.rankings === "Assists") {
                                return (<tr>
                                    <th>{i + 1}</th>
                                    <th>{info.name}</th>
                                    <th className="stat">{info.assists}</th>
                                </tr>)
                            }

                            if (props.rankings === "Points") {
                                return (<tr>
                                    <th>{i + 1}</th>
                                    <th>{info.name}</th>
                                    <th className="stat">{info.points}</th>
                                </tr>)
                            }
                            if (props.rankings === "Total Points"){
                                return (<tr>
                                    <th>{i + 1}</th>
                                    <th>{info.team}</th>
                                    <th className="stat">{info.standing}</th>
                                </tr>)
                            }
                        }
                        ))
                    }
                </table>
            </div>
        </div>
    );
}

export default Standings;
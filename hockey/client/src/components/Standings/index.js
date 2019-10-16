import React from "react";

function Standings(props) {
    return (
        <div>
            <div className="table-standings">
                {props.title}
            </div>

            <div>
                {
                    (props.players.sort(function(a, b){return a - b}))
                }
            </div>
        </div>
    );
}

export default Standings;
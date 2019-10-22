import React from "react";



function Teams(props) {
    return (
        <form>
            <div className="playerDiv">
                <h1 className="teamName">{props.teamName}</h1>

                {
                    (props.players.map((info, i) => {
                        if (info.team === props.teamName) {
                            return (<div>
                                <input type="radio" value={i} id={info.name} name={props.teamName} defaultChecked={props.selectedOption === 'deuce'}
                                    onChange={props.handleOptionChange} className="radioBtn" /><h3 className="players">{info.name}</h3>
                            </div>
                            )
                        }
                    }))
                }

            </div>
        </form>
    )
}

export default Teams;
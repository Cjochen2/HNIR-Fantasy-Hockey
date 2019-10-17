import React from "react";



function Teams(props) {
    return (
                <form>
                    <div className="playerDiv">
                    <h1 className="teamName">{props.teamName}</h1>
                    {
                        (props.players.map((info, i) => {
                            if (info.team === props.teamName) {
                                return (<div className="players">
                                    <input type="radio" value={i} name={props.teamName} defaultChecked={props.selectedOption === 'deuce'}
                                        onChange={props.handleOptionChange} className="radioBtn" /><h3>{info.name}</h3>
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
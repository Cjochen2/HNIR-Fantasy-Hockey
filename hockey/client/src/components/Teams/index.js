import React from "react";

function Teams(props) {
    return (
        <div>
            <form>
                <h1>Kelly's Heroes</h1>
                {
                    (props.players.map((info, i) => {
                        if (info.team === "Kelly's Heroes") {
                            return (<div>
                                <input type="radio" value={i} name="heroes" defaultChecked={props.selectedOption === 'deuce'}
                                    onChange={props.handleOptionChange} /><h3>{info.name}</h3>
                            </div>
                            )
                        }
                    }))
                }
                <h1>The Boys</h1>
                {
                    (props.players.map((info, i) => {
                        if (info.team === "The Boys") {
                            return (<div>
                                <input type="radio" value={i} name="boys" defaultChecked={props.selectedOption === 'deuce'}
                                    onChange={props.handleOptionChange} /><h3>{info.name}</h3>
                            </div>
                            )
                        }
                    }))
                }
                <h1>Cowley's Chaos</h1>
                {
                    (props.players.map((info, i) => {
                        if (info.team === "Cowley's Chaos") {
                            return (<div>
                                <input type="radio" value={i} name="chaos" defaultChecked={props.selectedOption === 'deuce'}
                                    onChange={props.handleOptionChange} /><h3>{info.name}</h3>
                            </div>
                            )
                        }
                    }))
                }
                <h1>Double Deuce</h1>

                {
                    (props.players.map((info, i) => {
                        if (info.team === "Double Deuce") {
                            return (<div>
                                <input type="radio" value={i} name="deuce" defaultChecked={props.selectedOption === 'deuce'}
                                    onChange={props.handleOptionChange} /><h3>{info.name}</h3>
                            </div>
                            )
                        }
                    }))
                }

                <h1>Buzzed Hockey Club</h1>
                {
                    (props.players.map((info, i) => {
                        if (info.team === "Buzzed Hockey Club") {
                            return (<div>
                                <input type="radio" value={i} name="buzzed" defaultChecked={props.selectedOption === 'deuce'}
                                    onChange={props.handleOptionChange} /><h3>{info.name}</h3>
                            </div>
                            )
                        }
                    }))
                }
                
            </form>
        </div>
    );
}

export default Teams;
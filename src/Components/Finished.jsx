import React, { useState } from "react";


const Finished = (props) => {
    
    return (
        <div className="end-container">
                {props.thuwin}
            <h1 className="welcome-message">Voting is Finished</h1>
                <button className="login-button" type="button" onClick={props.checkWinCandi} >Check the winner</button>
               { props.isShowResult   &&  <div>
                    <h1 className="welcome-message">The candidate win the Voting is {props.win_candi_name}<> with </>{props.win_candi_voteCount} votes</h1>
                </div>

               }
        </div>
    )
}

export default Finished;
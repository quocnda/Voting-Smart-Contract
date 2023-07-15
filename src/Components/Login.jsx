import React from "react";

const Login = (props) => {
    return (
        <div className="end-container">
            <h1 className="welcome-message">Welcome to Voting Dapp</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
        </div>
    )
}

export default Login;
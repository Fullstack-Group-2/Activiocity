import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("username: " ,username, " password: ", password);
    }
    return (
        <>
            <h1>Login</h1>
            <div>
                <input
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <input
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    );
}
export default Login;
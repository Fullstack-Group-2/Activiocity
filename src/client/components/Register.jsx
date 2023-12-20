import { useState } from "react";
import React from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        console.log("username: " ,username,
                 " password: ", password,
                 "email: ", email);
    }
    return (
        <>
            <h1>Register</h1>
            <div>
                <input
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <input
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={handleLogin}>Submit</button>
            </div>
        </>
    );
}
export default Register;
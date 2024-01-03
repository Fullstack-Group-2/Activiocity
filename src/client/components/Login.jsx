import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setToken}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async()=> {
        try {
            const { data: info} = await axios.post("/auth/auth/login", {
              username: username,
              password: password,
            })
            localStorage.setItem("TOKEN", info.token);
            setToken(info);
            if (info.user.isAdmin) navigate("/Admin");
            else{navigate("/Users");}
          } catch (error) {
            console.error(error.response.data.message);
            setErrorMsg(error.response.data.message);
          }
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
            <h2>{errorMsg}</h2>
        </>
    );
}
export default Login;
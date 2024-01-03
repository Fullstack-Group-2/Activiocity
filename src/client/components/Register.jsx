import { useState, useEfffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleRegister() {
    try {
      const { data: token } = await axios.post("/auth/auth/register", {
        username,
        password,
        // isAdmin: false,
      });
      localStorage.setItem("TOKEN", token.token);
      setToken(token.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Register</h1>
      <div>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );
};

export default Register;

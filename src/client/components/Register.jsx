import { useState, useEfffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

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
      navigate("/AllActivities");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="form-box">
        <h2 className="form-name">Register</h2>
        <form action="/Login" method="get" target="_blank">
          <div className="field1">
            <input
              required
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              id="submitBtn"
              className="submitBtn"
              onSubmit={handleRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

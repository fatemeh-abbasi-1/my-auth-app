import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { USER_REGEX, PWD_REGEX, userId } = useAuth();
  const [nameLogin, setNameLogin] = useState("");
  const [pwdLogin, setPwdLogin] = useState("");
  const [validInfo, setValidInfo] = useState(false);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (userId) {
      navigate("/");
    }
  };

  useEffect(() => {
    setValidInfo(true);
  }, [pwdLogin, nameLogin]);

  return (
    <section>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          id=""
          placeholder="User Name"
          onChange={(e) => setNameLogin(e.target.value)}
        />
        <input
          type="password"
          id=""
          placeholder="Password"
          onChange={(e) => setPwdLogin(e.target.value)}
        />
        <button onClick={(e) => handleLogin(e)}>Login</button>
        {!userId && validInfo && (
          <p style={{ color: "white" }}>
            You have not registered yet ! You need to Regisrer.
          </p>
        )}
      </form>
      <p className="help-text">
        Need an Account?
        <br />
        <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;

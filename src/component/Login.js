import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const {
    USER_REGEX,
    PWD_REGEX,
    userId,
    nameLogin,
    setNameLogin,
    pwdLogin,
    setPwdLogin,
    validNameLogin,
    setValidNameLogin,
    validPwdLogin,
    setValidPwdLogin,
    errLogin,
    setErrLogin,
    userRef,
  } = useAuth();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (userId && validNameLogin && validPwdLogin) {
      navigate("home");
    } else {
      setErrLogin(true);
      setNameLogin("");
      setPwdLogin("");
    }
  };

  useEffect(() => {
    setValidNameLogin(USER_REGEX.test(nameLogin));
    setValidPwdLogin(PWD_REGEX.test(pwdLogin));
  }, [pwdLogin, nameLogin]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <section>
      <h1>Login</h1>
      <form>
        <input
          ref={userRef}
          type="text"
          id=""
          placeholder="User Name"
          value={nameLogin}
          onChange={(e) => setNameLogin(e.target.value)}
        />
        <input
          type="password"
          id=""
          placeholder="Password"
          value={pwdLogin}
          onChange={(e) => setPwdLogin(e.target.value)}
        />
        <button onClick={(e) => handleLogin(e)}>Login</button>
        {!userId && errLogin && (
          <p style={{ color: "white" }}>
            You have not registered yet Or the username or password entered
            incorrectly.!
          </p>
        )}
      </form>
      <p className="help-text">
        Need an Account?
        <br />
        <Link to="/">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;

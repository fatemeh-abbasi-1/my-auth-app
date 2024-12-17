import React from "react";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const {
    userId,
    nameLogin,
    setNameLogin,
    pwdLogin,
    setPwdLogin,
    validNameLogin,
    validPwdLogin,
    errLogin,
    setErrLogin,
    userRef,
  } = useAuth();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (userId && validNameLogin && validPwdLogin) {
      navigate("/home");
      setNameLogin("");
      setPwdLogin("");
    } else {
      setErrLogin(true);
      setNameLogin("");
      setPwdLogin("");
    }
  };

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
        {errLogin ? (
          <h4 style={{ color: "red" }}>
            You have not registered yet Or the username or password entered
            incorrectly.!
          </h4>
        ) : (
          ""
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

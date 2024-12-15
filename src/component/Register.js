import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { USER_REGEX, PWD_REGEX } = useAuth();

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("0");

  const [vaidUser, setVaidUser] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validConfirm, setValidConfirm] = useState(false);

  useEffect(() => {
    setVaidUser(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidConfirm(pwd === confirmPwd);
  }, [pwd, confirmPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    const id = Math.random();
    localStorage.setItem("idUser", JSON.stringify(id));
  };

  return (
    <section>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="User Name"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          className={vaidUser ? " border-green" : ""}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
          className={validPwd ? " border-green" : ""}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
          onChange={(e) => setConfirmPwd(e.target.value)}
          className={validConfirm ? " border-green" : ""}
        />
        <button onClick={(e) => handleSubmit(e)}>Sign Up</button>
      </form>
      <p className="help-text">
        Already registered?
        <br />
        <span>
          <Link to="/login">Sign In</Link>
        </span>
      </p>
    </section>
  );
};

export default Register;

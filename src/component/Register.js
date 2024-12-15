import React from "react";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const {
    USER_REGEX,
    PWD_REGEX,
    userRef,
    setUserRef,
    user,
    setUser,
    pwd,
    setPwd,
    confirmPwd,
    setConfirmPwd,
    vaidUser,
    setVaidUser,
    validPwd,
    setValidPwd,
    validConfirm,
    setValidConfirm,
    userFocus,
    setUserFocus,
    pwdFocus,
    setPwdFocus,
    confirmFocus,
    setConfirmFocus,
  } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    setVaidUser(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidConfirm(pwd === confirmPwd);
  }, [pwd, confirmPwd]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("home");
    const id = Math.random();
    localStorage.setItem("idUser", JSON.stringify(id));
    setUser("");
    setPwd("");
    setConfirmPwd("");
  };

  return (
    <section>
      <h1>Register</h1>
      <form>
        <input
          ref={userRef}
          type="text"
          placeholder="User Name"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          className={vaidUser ? " border-green" : ""}
          aria-describedby="uidnote"
          value={user}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />

        <p
          id="uidnote"
          className={!vaidUser && userFocus && user ? "show" : "hide"}
        >
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
          className={validPwd ? " border-green" : ""}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          value={pwd}
        />
        <p
          className={!validPwd && pwdFocus && pwd ? "show" : "hide"}
        >
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
          className={validConfirm && confirmFocus ? " border-green" : ""}
          onFocus={() => setConfirmFocus(true)}
          onBlur={() => setConfirmFocus(false)}
        />
        <p
          id="confirmnote"
          className={!validConfirm && confirmFocus ? "show" : "hide"}
        >
          Must match the first password input field.
        </p>

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

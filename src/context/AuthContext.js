import { useState, useEffect, useContext, createContext, useRef } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [userId, setUserId] = useState(localStorage.getItem("idUser") || null);
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [vaidUser, setVaidUser] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const [validConfirm, setValidConfirm] = useState(false);

  const [userFocus, setUserFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  const [nameLogin, setNameLogin] = useState("");
  const [pwdLogin, setPwdLogin] = useState("");

  const [validNameLogin, setValidNameLogin] = useState(false);
  const [validPwdLogin, setValidPwdLogin] = useState(false);

  const [errLogin, setErrLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        USER_REGEX,
        PWD_REGEX,
        userId,
        setUserId,
        userRef,
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

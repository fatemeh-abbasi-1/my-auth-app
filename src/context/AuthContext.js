import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [userId,setUserId] = useState(localStorage.getItem('idUser') || null)

  return (
    <AuthContext.Provider value={{ USER_REGEX, PWD_REGEX ,userId,setUserId}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

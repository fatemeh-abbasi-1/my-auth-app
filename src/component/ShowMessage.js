import React from "react";
import { Link } from "react-router-dom";

const ShowMessage = () => {
  return (
    <>
      <h1 style={{ color: "white", marginBottom: "1rem" }}>
        You have logged out!
      </h1>
      <Link to={"/"} style={{ color: "white", marginBottom: "1rem" }}>
        Go to register
      </Link>
      <Link to={"/login"} style={{ color: "white" }}>
        Go to login
      </Link>
    </>
  );
};

export default ShowMessage;

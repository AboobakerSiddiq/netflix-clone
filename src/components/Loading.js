import React from "react";
import "./Loading.css";
import logo from "../assests/images/loading-logo.png";
import SyncLoader from "react-spinners/SyncLoader";

function Loading() {
  return (
    <div className="loading">
      <img className="loading_logo" alt="" src={logo} />
      <SyncLoader color="white" size={10} />
    </div>
  );
}

export default Loading;

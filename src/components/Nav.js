import React, { useEffect, useState } from "react";
import "./Nav.css";
import img from "../assests/images/user_img.png";
import logo from "../assests/images/netflix-logo.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleshow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          onClick={() => history.push("/")}
          alt=""
          src={logo}
        />
        <img
          style={{
            width: 30,
            position: "fixed",
            right: 0,
            marginRight: 25,
            top: 20,
            objectFit: "contain",
          }}
          onClick={() => history.push("/profile")}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;

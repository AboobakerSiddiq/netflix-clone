import React from "react";
import Nav from "./Nav";
import "./ProfileScreen.css";
import avatar from "../assests/images/user_img.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="profile">
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img alt="" src={avatar} />

          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plan">
              <h3>Plans (Current Plan: Premium)</h3>
              <h4>Renewal date: 04/02/2022</h4>
              <div className="plan_div">
                <div className="plans">
                  <div className="plan_flex">
                    <h3>
                      Netflix Standard<h5>1080p</h5>
                    </h3>
                  </div>
                  <div>
                    <button className="btn_plans">Subscribe</button>
                  </div>
                </div>
                <div className="plans">
                  <div className="plan_flex">
                    <h3>
                      Netflix Basic<h5>480p</h5>
                    </h3>
                  </div>
                  <div>
                    <button className="btn_plans">Subscribe</button>
                  </div>
                </div>
                <div className="plans">
                  <div className="plan_flex">
                    <h3>
                      Netflix Premium <h5>4K + HDR</h5>
                    </h3>
                  </div>
                  <div>
                    <button className="btn_plans1">Current Package</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => auth.signOut().then(() => history.push("/"))}
                className="profile_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

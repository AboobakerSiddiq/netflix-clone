import React, { useState } from "react";
import "./Login.css";
import netflixlogo from "../assests/images/netflix-logo.png";
import SignupScreen from "../components/SignupScreen";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useHistory } from "react-router-dom";

function Login() {
  const [signin, setSignin] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        let user = res.user;

        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        // history.push("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_bg">
        <img className="login_logo" src={netflixlogo} alt="" />
        <div onClick={() => handleAuth()} className="login_btn">
          Sign In
        </div>
        <div className="login_gradient"></div>
      </div>
      <div className="login_body">
        {signin ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="E-mail address" />
                <button className="login_btn2" onClick={() => setSignin(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;

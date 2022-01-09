import React from "react";

function Signup() {
  return (
    <div className="signup">
      <form>
        <h1>Sign Up</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit">Sign in</button>
        <h4>
          <span className="signup_span">New to Netflix? </span>
          <span className="signup_link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;

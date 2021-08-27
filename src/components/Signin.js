import React from "react";
import "../components/signin.css";

function Signin() {
  return (
    <div className="container">
      <div className="signin">
        <div className="signin-form">
          <img
            className="kidsloop-img"
            src="assets/kidsloop_min_logo.svg"
            alt="kidsloop logo"
          />
          <h3>Sign In</h3>
          <form action="">
            <div className="signin-form-input">
              <label htmlFor="email"></label>
              <input type="text" placeholder="Email or Phone *" />
              <label htmlFor="password"></label>
              <input type="text" placeholder="Password *" />
            </div>
            <div className="link-section">
              <div className="link-section-row">
                <a href="/">Forgot Password?</a>
                <button>Sign In</button>
              </div>
              <a href="/">Create an Account</a>
            </div>
          </form>
        </div>
      </div>
      <div className="dropdown-section">
        <div className="dropdown"></div>
        <p>Select Language</p>
        <div className="dropdown-terms">
          <p>help</p>
          <p>privacy</p>
          <p>terms</p>
        </div>
      </div>
    </div>
  );
}

export default Signin;

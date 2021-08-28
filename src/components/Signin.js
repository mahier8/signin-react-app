import React from "react";
import "../components/signin.css";
import { IoSettings } from "react-icons/io5";
import { IconContext } from "react-icons";

function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <IconContext.Provider value={{ color: "#10438f" }}>
      <div className="container">
        <div className="signin">
          <div className="signin-form">
            <img
              className="kidsloop-img"
              src="assets/kidsloop_min_logo.svg"
              alt="kidsloop logo"
            />
            <h3>Sign In</h3>

            <form onSubmit={handleSubmit}>
              <div className="signin-form-input">
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email or Phone *"
                  required
                />
                <label htmlFor="password"></label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password *"
                  required
                />
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
          <div className="dropdown">
            <IoSettings />
            <select className="language-select">
              <option selected value="select-language">
                Select-Language
              </option>
              <option value="">Korean</option>
              <option value="">English</option>
              <option value="">Jamaican</option>
            </select>
          </div>
          {/* <p >
            
            
          </p> */}
          <div className="dropdown-terms">
            <p>help</p>
            <p>privacy</p>
            <p>terms</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Signin;

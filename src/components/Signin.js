import { useState } from "react";
import "../components/signin.css";
import { IoSettings } from "react-icons/io5";
import { IconContext } from "react-icons";

function Signin() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredNameIsvalid, setenteredNameIsvalid] = useState(false);

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // if (enteredEmail.trim() === "") {
    //   setenteredNameIsvalid(false);
    //   return;
    // }

    // setenteredNameIsvalid(true);

    console.log(enteredEmail);
    console.log(enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
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
            {/* form */}
            <form onSubmit={formSubmitHandler}>
              <div className="signin-form-input">
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email or Phone *"
                  required
                  onChange={emailInputChangeHandler}
                  value={enteredEmail}
                />
                {/* {!enteredNameIsvalid && (
                  <p className="error-text">Name must not be empty</p>
                )} */}
                <label htmlFor="password"></label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password *"
                  required
                  onChange={passwordInputChangeHandler}
                  value={enteredPassword}
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
            {/* form */}
          </div>
        </div>
        <div className="dropdown-section">
          <div className="dropdown">
            <IoSettings />
            <select selected className="language-select">
              <option value="select-language">Select Language</option>
              <option value="Korean">Korean</option>
              <option value="English">English</option>
              <option value="Jamaican">Jamaican</option>
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

import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Registration.css";
import initializeAuthentication from "../Firebase/firebase.init";
import useAuth from "../hooks/useAuth";

initializeAuthentication();

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  const { signInUsingGoogle } = useAuth();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return (
    <div className='m-5'>
      <div style={{ overflow: "hidden" }}>
        <h3
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "3rem",
            color: "rgb(0,225,177)",
          }}
        >
          {isLogin ? "Log In" : "Registration"}
        </h3>
        <hr
          className="mx-auto"
          style={{ color: "rgb(0,225,177)", width: "50%", height: "2px" }}
        />
        <br />
        <br />
        <form onSubmit={handleRegistration}>
          {!isLogin && (
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onBlur={handleNameChange}
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
              </div>
            </div>
          )}

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                placeholder="Your Email"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handlePasswordChange}
                placeholder="Your Password"
                type="password"
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  onChange={toggleLogin}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered?
                </label>
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "3rem",
              color: "rgb(0,225,177)",
            }}
          >
            {error}
          </p>
          <div className='reg-btn'>
          <div className="con-btn">
            <button type="submit">{isLogin ? "LogIn" : "Register"}</button>
          </div>
          <div className="con-btn mt-5">
        <button onClick={signInUsingGoogle}>Sign in with Google</button>
      </div>
          </div>
        </form>
        
      </div>
     
    </div>
  );
};

export default Registration;

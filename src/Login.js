import React, { useState } from "react";
import Navbar from "./Navbar";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar background="login" page="login" />
      <div className="login">
        <div className={`container ${signIn ? "right-panel-active" : ""}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Register</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  Log in to your account and start adding blocks!
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => {
                    setSignIn(!signIn);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Welcome!</h1>
                <p>Create a new account and start studying</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => {
                    setSignIn(!signIn);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

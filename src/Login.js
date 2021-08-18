import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar background="login" page="login" />
      <div className="logincontainer">
        Log in{" "}
        <form className="logincontainer__form">
          <label for="email" className="logincontainer__form__label">
            Email:
          </label>
          <input type="text" name="email" placeholder="Enter Email" />

          <label for="password" className="logincontainer__form__label">
            Password:
          </label>
          <input type="text" name="password" placeholder="Enter Password" />
          <div>
            <input type="checkbox" /> Remember Me
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, {useState} from "react";
import Navbar from "./Navbar";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };
  return (
    <div>
      <Navbar background="signup" page="signup" />
      <main className="loginmain loginmain--signup">
        <div
          className={`logincontainer logincontainer--signup ${
            submitted ? "logincontainer--submitted" : ""
          }`}
        >
          Sign up
          <form className="logincontainer__form" onSubmit={handleSubmit}>
            <label for="username" className="logincontainer__form__label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              className="logincontainer__form__input"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label for="password" className="logincontainer__form__label">
              Password:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              value={password}
              className="logincontainer__form__input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Sign up"
              className="logincontainer__form__loginbutton"
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;

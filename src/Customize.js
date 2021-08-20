import React from "react";
import Navbar from "./Navbar";

const Customize = () => {
  return (
    <div>
      <Navbar background="customize" page="customize" />
      <div className="customizecontainer">
        <div className="customizecontainer__forms">
          <h1>Block customization</h1>
          <form className="customizecontainer__form-container">
            <label for="animations">Animations</label>
            <select name="animations">
              <option value="spin">Spin</option>
              <option value="jump">Jump</option>
            </select>
            <label for="themes">Block Themes</label>
            <select name="themes">
              <option value="piano">Piano</option>
              <option value="rainbow">rainbow</option>
            </select>
            <button type="submit">Save</button>
          </form>
          <h1>Timer customization</h1>

          <form className="customizecontainer__form-container">
            <div name="time">
              <h2>Time(minutes)</h2>
              <div className="customizecontainer__timeform">
                <div className="customizecontainer__timeform--time">
                  <label for="pomodoro">Pomodoro</label>
                  <input type="text" defaultValue="25" id="pomodoro" />
                </div>
                <div className="customizecontainer__timeform--time">
                  <label for="shortbreak">Short Break</label>
                  <input type="text" defaultValue="5" id="shortbreak" />
                </div>
                <div className="customizecontainer__timeform--time">
                  <label for="longbreak">Long Break</label>
                  <input type="text" defaultValue="15" id="longbreak" />
                </div>
              </div>
            </div>
            <label for="interval">Interval</label>
            <input type="text" defaultValue="4" id="interval"></input>
            <label for="sounds">Alarm Sounds</label>
            <select name="sounds" id="sounds">
              <option value="Standard">Default</option>
              <option value="rainbow">Ripples</option>
            </select>
            <label for="slider">Alarm volume </label>
            <input type="range" id="slider" name="slider" min="0" max="50" />

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customize;

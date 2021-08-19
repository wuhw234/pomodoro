import React from "react";

const Timer = ({ seconds, paused, setPaused, background }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;
  let label;
  if (background === "break") label = "Short Break";
  else if (background === "work") label = "Work time!";
  else label = "Long Break";

  return (
    <div className={`timerbox timerbox--${background}`}>
      <div className="timerbox__label">{label}</div>
      <div className="timerbox__time">
        {minutes}:{remainingSeconds < 10 && "0"}
        {remainingSeconds}{" "}
      </div>
      <button onClick={() => setPaused(!paused)} className="startbtn">
        {paused ? "Start" : "Stop"}
      </button>
    </div>
  );
};

export default Timer;

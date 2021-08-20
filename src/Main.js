import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Timer from "./Timer";
import Navbar from "./Navbar";
import { Pomos } from "./Pomos";

const Main = () => {
  const [time, setTime] = useState(2);
  const [paused, setPaused] = useState(true);
  const [round, setRound] = useState(1);
  const [background, setBackground] = useState("work");
  const [showTimer, setShowTimer] = useState(true);

  const handleRoundChange = () => {
    setPaused(true);
    if (round === 7) {
      setBackground("longbreak");
      setTime(3);
      setRound(0);
    } else {
      if (round % 2 === 0) {
        setTime(2);
        setBackground("work");
      } else {
        setTime(1);
        setBackground("break");
      }
      setRound((round) => round + 1);
    }
  };

  useEffect(() => {
    let interval = null;
    if (!paused) {
      if (time < 0) {
        handleRoundChange();
      } else {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      }
    }
    return () => clearInterval(interval);
  }, [time, paused, round, background]);

  return (
    <>
      <Navbar background={background} page="main" />
      <main className={`main main--${background}`}>
        <FaChevronLeft
          size={70}
          className="arrowbutton"
          onClick={() => setShowTimer(!showTimer)}
        />
        {showTimer ? (
          <Timer
            seconds={time}
            paused={paused}
            setPaused={setPaused}
            background={background}
          />
        ) : (
          <div className="statcontainer">
            <div className="statcontainer__text">
              Study time: <b>x hours</b>, visualized in 2h{" "}
              <a
                href="#"
                className="tooltip"
                data-tool-tip="Check out the customize tab!"
              >
                blocks
              </a>
              :
            </div>
            <div className="boxcontainer">
              {Pomos.map((pomo) => (
                <div className={`box box--spin`}></div>
              ))}
            </div>
          </div>
        )}
        <FaChevronRight
          size={70}
          className="arrowbutton"
          onClick={() => setShowTimer(!showTimer)}
        />
      </main>
    </>
  );
};

export default Main;

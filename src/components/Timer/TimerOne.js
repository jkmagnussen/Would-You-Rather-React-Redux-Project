import React, { useEffect, useState } from "react";
import "./Timer.css";

function TimerOne() {
  const calculateTimeLeft = () => {
    
    var today = new Date();

    const difference = today.setHours(today.getHours() + 3, today.getHours() + 3, today.getHours() + 3) - new Date();


    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
         {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="timeStamp ">
    + {timerComponents.length ? timerComponents: <span>Time's up!</span>}
    </div>
  );
}

export default TimerOne;
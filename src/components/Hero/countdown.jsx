import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div style={{ 
        textAlign: "center",
        margin: "20px 0", 
        padding: "10px", 
        backgroundColor: "block", 
        borderRadius: "10px",
        border: "2px solid #fff" /* Example border */
      }}>
        <h1 style={{ 
          fontSize: "3.5rem", 
          fontWeight: "bold", 
          color: "white",
          margin: "0", /* Reset margin for the h1 element */
          padding: "5px" /* Example padding */
        }}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h1>
      </div>
      
  
  );
};

export default CountdownTimer;

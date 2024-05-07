import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import CountdownTimer from "./countdown";

const Hero = () => {
  // Set your target date for the countdown timer
  const targetDate = "2024-05-15T00:00:00";

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading}>speech</h1>
          <p className={classes.date}>May 15, 2024</p>
          {/* Add the countdown timer component here */}
          <CountdownTimer targetDate={targetDate} />
          <Link
            className={classes.anchorBtn}
            rel="noopener noreferrer"
            to="https://forms.gle/QHAWMfbiXtH8cCJA6"
          >
            <Button
              link="https://forms.gle/QHAWMfbiXtH8cCJA6"
              label="Register Now"
              className={classes.btn}
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

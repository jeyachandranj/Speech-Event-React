import React from "react";
import About from "../components/About/About";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={classes.about_page}>
      <h1 className={classes.headingx}>About</h1>
        <About />
      </div>
    </>
  );
};

export default AboutPage;

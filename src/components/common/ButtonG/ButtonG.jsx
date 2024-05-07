import React from "react";
import classes from "./ButtonG.module.css";

const ButtonG = () => {
  return (
    <>
      <button className={classes.button}>
        P L A Y
        <div id={classes.clip}>
          <div id={classes.leftTop} class={classes.corner}></div>
          <div id={classes.rightBottom} class={classes.corner}></div>
          <div id={classes.rightTop} class={classes.corner}></div>
          <div id={classes.leftBottom} class={classes.corner}></div>
        </div>
        <span id={classes.rightArrow} class={classes.arrow}></span>
        <span id={classes.leftArrow} class={classes.arrow}></span>
      </button>
    </>
  );
};

export default ButtonG;

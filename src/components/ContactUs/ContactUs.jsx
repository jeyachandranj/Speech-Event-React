import React from 'react'
import classes from "./ContactUs.module.css"
import img1 from "../../assets/img1.png";
import img2 from "../../assets/3764982.jpg";
const ContactUs = () => {
  return (
    <>
      <div className={classes.background}>
        {/* <div className={classes.registerForm}> */}
        <div className={classes.card}>
        <h1 className={classes.heading}>Contact Us</h1>

          <div className={classes.card2}>
            <div className={classes.column}>
              <div>
                <h1>JEYACHANDRAN J</h1>
                <div>
                  <img src={img1} alt="" />
                  <h1>AIML DEPT</h1>
                  <h1>Phone No : 7418800609</h1>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div>
                <h1>Name 2</h1>
                <div>
                  <img src={img2} alt="" />
                  <h1>  CSE DEPT</h1>
                  <h1>Phone No : 7418800609</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs
import React from 'react'
import classes from './Register.module.css'
import Button from "../Button/Button"

const Register = () => {
  return (
    <>
        <div className={classes.background}>
            <div className={classes.registerForm}>
              <h1 className={classes.heading}>Register</h1>
              <div className={classes.userData}>
                <div className={classes.input_container}>
                  <label className={classes.input_label}>
                    Name<span className={classes.mandatory}>*</span>
                  </label>
                  <input className={classes.input}/>
                </div>
                <div className={classes.input_container}>
                  <label className={classes.input_label}>
                    Email<span className={classes.mandatory}>*</span>
                  </label>
                  <input className={classes.input}/>
                </div>
                <div className={classes.input_container}>
                  <label className={classes.input_label}>
                    Phone Number<span className={classes.mandatory}>*</span>
                  </label>
                  <input className={classes.input}/>
                </div>
              </div>
              <div className={classes.button}><Button label="Send"/></div>
            </div>
        </div>
    </>
  )
}

export default Register
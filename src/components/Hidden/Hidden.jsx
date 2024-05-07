import React from 'react'
import classes from "./Hidden.module.css"
import Button from "../common/Button/Button"

const Hidden = () => {
  return (
    <>
      <div className={classes.background}>
        {/* <div className={classes.registerForm}> */}
        <div className={classes.card}>
          <div className={classes.card2}>
              <h1 className={classes.heading}>Winners</h1>
              <div className={classes.winnerData}>

                <div className={classes.winner1}>
                    <span className={classes.containerHeading}>1st Winner</span>
                    <div className={classes.labelContainer}>
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
                    </div>
                </div>

                <div className={classes.winner2}>
                    <span className={classes.containerHeading}>2nd Winner</span>
                    <div className={classes.labelContainer}>
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
                    </div>
                </div>

                <div className={classes.winner3}>
                    <span className={classes.containerHeading}>3rd Winner</span>
                    <div className={classes.labelContainer}>
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
                    </div>
                </div>

                <div className={classes.winner4}>
                    <span className={classes.containerHeading}>4th Winner</span>
                    <div className={classes.labelContainer}>
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
                    </div>
                </div>

                <div className={classes.winner5}>
                    <span className={classes.containerHeading}>5th Winner</span>
                    <div className={classes.labelContainer}>
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
                    </div>
                </div>

              </div>
              <div className={classes.button}><Button label="Submit"/></div>
            </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Hidden
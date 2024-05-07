import React from "react";
import classes from "./SingleEventPage.module.css";
// import sample from "../../assets/Events/sample.jpeg";
import Button from "../common/Button/Button";
import { useParams } from "react-router-dom";
import { eventsData } from "../../assets/eventsData";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const SingleEventPage = () => {
  const { eventId } = useParams();
  console.log(eventId);

  const requiredEvent = eventsData.find((event) => event.id === +eventId);
  const {
    name,
    image,
    description,
    rules,
    note,
    prizes,
    team,
    contactInfo,
    location,
    date,
    link,
    onSpot,
    // disqualification,
  } = requiredEvent;

  return (
    <>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img className={classes.eventPoster} src={image} alt="eventName" style={{marginRight:" 300px",width:"400px",marginLeft:"300px"}}/>
          </div>
          <div className={classes.col2}>
            <h1 className={classes.eventHeading}>{name}</h1>
             <div className={classes.subheading}>
              <h2 className={classes.heading}>Rules</h2>
              <p className={classes.content}>{rules}</p>
            </div> 
            {/* <div className={classes.rowcol}>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Team</h2>
                <p className={classes.content}>{team}</p>
              </div>
            </div>
            {prizes && (
              <div className={classes.subheading}>
                <h2 className={classes.headingp}>Prizes</h2>
                <ul>
                  {prizes?.map((prize, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {prize}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {rules && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Rules and Regulations</h2>
                <ul>
                  {rules?.map((rule, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {rule}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {disqualification && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Disqualification</h2>
                <ul>
                  {disqualification?.map((rule, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {rule}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className={classes.subheading}>
              <h2 className={classes.heading}>Location</h2>
              <p className={classes.content}>{location}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Date and Timing</h2>
              <p className={classes.content}>{date}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Contact Info</h2>
              {contactInfo?.map((contact, i) => {
                return (
                  <p key={i} className={classes.content}>
                    {contact}
                  </p>
                );
              })}
            </div>
            {note && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Note</h2>
                {note?.map(() => {
                  return <p className={classes.content}>{note}</p>;
                })}
              </div>
            )} */}
            {link == "" ? (
              <Button hrefLink={link} label="Register" />
      
            ) : onSpot !== "" ? (
              <p className={classes.soon}>
                Registration will be taken on spot!{" "}
              </p>
            ) : (
              <p className={classes.soon}>Registration will be open soon.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;

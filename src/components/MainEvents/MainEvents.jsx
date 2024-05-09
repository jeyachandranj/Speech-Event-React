import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";

const MainEvents = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Event</h1>
        <img src="x" alt="" />
        <h1 className={classes.sub_heading}>Speech</h1>

        <div className={classes.events_container}>
          
          {eventsData.map((eventData, i) => {
            if(eventData.eventType=='Tech'){
              return <EventCard eventData={eventData} key={i} />;
            }
            
          })}
        </div>
        
      </div>
    </>
  );
};

export default MainEvents;

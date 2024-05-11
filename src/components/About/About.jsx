// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "../../assets/3764982.jpg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>Lexiax</h2>
            <h1>Narracio - Elevate Your Public Speaking Skills</h1><br></br>
            <p className={classes.para}>
            Narracio is not an event. It’s a journey! It’s a journey into the art of seeing, narrating, and knowing.According to Mark Twain, “The right word may be effective, but no word was ever as effective as a rightly timed pause.” Let’s find it out together. Let’s join in the spirit of discovery as your voice transforms you and others into confident speakers.
            </p>
            <h1>"Talk the Talk: The Debate" - Empowering Minds Through Discourse
</h1><br></br>
            <p className={classes.para}>
            Join 'Talk the Talk: The Debate' for intellectual sparring and societal growth. As Winston Churchill said, 'Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.' Let's shape tomorrow through respectful dialogue, understanding, and the exchange of ideas. Be a part of the conversation that changes the world.
            </p>
          </div>
          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about"  />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

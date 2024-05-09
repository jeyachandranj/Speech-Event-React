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
            Narracio is more than just an event; it's an opportunity to refine the art of public speaking. This dynamic event is dedicated to enhancing your ability to speak confidently and persuasively in public.
Speech, as the unique art of vocal communication exclusive to humans, involves forming words in each language through distinct combinations of vowels and consonants, each with specific meanings and syntactic roles in sentences. During Narracio, participants will explore the nuances of effective communication, mastering elements such as pronunciation, intonation, volume, and pace to convey meaning with impact. Through interactive sessions and hands-on exercises, attendees will refine their skills in informing, declaring, asking, persuading, and directing, unlocking the full potential of their public speaking abilities. Whether you're a beginner or seeking to refine your skills, Narracio provides a supportive environment to grow and excel in the art of public speaking. Join us and unleash your full speaking potential!
            </p>
            <h1>"Talk the Talk: The Debate" - Empowering Minds Through Discourse
</h1><br></br>
            <p className={classes.para}>
            "Talk the Talk: The Debate" is a celebration of the art of argumentation and persuasive communication, recognizing its profound impact on society, education, and personal growth. Beyond verbal sparring, Debate is a catalyst for critical thought and intellectual development. Participants engage in deep discussions, challenging perspectives with compelling arguments and evidence. In "Talk the Talk: The Debate," attendees not only improve their communication skills but also cultivate critical thinking, effective research techniques, and confident self-expression. This event exemplifies how debate can profoundly impact individuals, encouraging them to become more knowledgeable, articulate, and active contributors to society. Join us for an enlightening experience that sharpens debating skills, broadens perspectives, and deepens understanding of the world.
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

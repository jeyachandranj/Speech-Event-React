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
            <h2 className={classes.heading1}>speech</h2>
            <p className={classes.para}>
            Speech is a human vocal communication using language. Each language uses phonetic combinations of vowel and consonant sounds that form the sound of its words (that is, all English words sound different from all French words, even if they are the same word, e.g., "role" or "hotel"), and using those words in their semantic character as words in the lexicon of a language according to the syntactic constraints that govern lexical words' function in a sentence. In speaking, speakers perform many different intentional speech acts, e.g., informing, declaring, asking, persuading, directing, and can use enunciation, intonation, degrees of loudness, tempo, and other non-representational or paralinguistic aspects of vocalization to convey meaning.
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

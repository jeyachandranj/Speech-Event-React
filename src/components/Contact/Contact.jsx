import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default Contact;

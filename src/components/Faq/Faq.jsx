import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  // {
  //   question: "What is SHPEECH?",
  //   answer:
  //     "URJAA 2k24 is the one of biggest Technical event in the history of DYPCOE.",
  // },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "The event will start at 9AM on May 15 and will be till 15 of May 4PM",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "register the Event",
  },
  {
    question: "Is there any entry fee for Speech?",
    answer:
      "No",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;

import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import S from "./style.module.scss";
import { Email } from "../../config/info";
function Contact() {
  return (
    <AnimationOnScroll
      animateIn="animate__slideInUp"
      animateOut="animate__slideInUp"
    >
      <div id="contact-me" className={S.Container}>
        <header>
          <h1 className={S.Title}>
            <span className={S.Number}>05.</span> Now what ?
          </h1>
          <hr className={S.CentredLine}></hr>
          <h1 className={S.BigTitle}> Get In Touch</h1>
          <div className={S.Description}>
            <p>
              {" "}
              Thank you for taking the time to review my portfolio; I hope you
              find it compelling.{" "}
            </p>
            <p>
              Thank you for taking the time to review my portfolio; I hope you
              find it compelling. Feel free to connect with me via LinkedIn or
              Facebook for further discussion{" "}
            </p>
            <p> Or for a more formal approach, please reach out via email.</p>
          </div>
          <a href={`mailto:${Email}`} className={`${S.button} `}>
            Send Me an Email{" "}
          </a>
        </header>
      </div>
      <p className={S.Footer}>
        Design & Developed By <br /> Amine Beji
      </p>
    </AnimationOnScroll>
  );
}

export default Contact;

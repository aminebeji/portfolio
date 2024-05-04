import React from "react";
import S from "./style.module.scss";
import AnimatedText from "react-animated-text-content";
import "./../../style/_globals.scss";
import { Email } from "../../config/info";
function AboutMe() {
  let ReturnClassName = (i) => {
    switch (i) {
      case 0:
        return `${S.Hello} `;
        break;
      case 1:
        return `${S.Name}`;
        break;
      case 2:
        return `${S.Title}`;
        break;
      case 3:
        return `${S.Paragraph}`;
        break;
    }
  };
  let one = "Welcome to my portfolio. I'm ";

  let two = "Amine Beji.";

  let three = "I make websites alive.";

  let four = `I'm a Full Stack web developer passionate about crafting exceptional web applications with a focus on accessibility and user-centered design.`;

  let five = (
    <a href={`mailto:${Email}`} className={`${S.button} `}>
      {" "}
      Get In Touch{" "}
    </a>
  );

  let ItemsAbout = [one, two, three, four, five];

  return (
    <div id="intro" className={`${S.Container}`}>
      {ItemsAbout.map((item, i) => {
        return (
          <AnimatedText
            type="chars"
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.5,
              ease: "ease-in-out",
            }}
            animationType="rifle"
            interval={i === 3 ? 0.01 : 0.04}
            duration={i === 3 ? 0.1 : 0.4}
            tag="p"
            className={ReturnClassName(i)}
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            {item}
          </AnimatedText>
        );
      })}
      {five}
    </div>
  );
}

export default AboutMe;

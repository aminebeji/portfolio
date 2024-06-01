import React from "react";
import S from "./style.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
const MyPhoto = require("./../../photos/photoBeji.jpg");
function InfoSection() {
  return (
    <AnimationOnScroll
      animateIn="animate__slideInUp"
      animateOut="animate__slideInUp"
    >
      <div id="about-me" className={S.Container}>
        <header>
          <h1 className={S.Title}>
            <span className={S.Number}>01.</span> About Me{" "}
            <hr className={S.TitleLine}></hr>
          </h1>
        </header>
        <div className={`${S.InfoContainer}`}>
          <div>
            <p>
              Hello! I'm <span className="HighLighted">Amine Beji</span> and I
              love bringing ideas to life on the internet. My journey into web
              development began in 2012 when I first created{" "}
              <span className="HighLighted">a Facebook account. </span>
              Witnessing the power of such platforms intrigued me, leading me to
              become{" "}
              <span className="HighLighted">
                a Full Stack web developer.
              </span>{" "}
              Today, I specialize in utilizing React.js and Node.js to build
              applications, including clones of platforms like Facebook.
            </p>
            <p>
              Following this fascination, I pursued Multimedia and Web
              Development studies at{" "}
              <a href="https://isitcom.rnu.tn/" target={"_blank"}>
                <abbr title="Institut Supérieur d'Informatique et des Technologies de Communication de Hammam Sousse">
                  ISITCOM
                </abbr>
              </a>
            </p>
            <p>
              By day, I work as{" "}
              <span className="HighLighted">a Full Stack web developer</span>{" "}
              and <span className="HighLighted">Technical Team Leader</span>,
              and by night, I'm a passionate gamer.{" "}
            </p>
            <p>
              Those Some of my favorite Technologies that i m using daily :
              <ul className={S.TechnoList}>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Html</li>
                <li>Css/Scss</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Vue.js (2 & 3)</li>
                <li>Node.js</li>
                <li>GoLang</li>
                <li>C#</li>
                <li>.NET</li>
                <li>Looker Studio</li>
              </ul>
            </p>
          </div>
          <div className={S.ImageContainer}>
            <img alt="Amine Beji" src={MyPhoto} className={`${S.Image}`} />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default InfoSection;

import React from "react";
import S from "./style.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { EDUCATIONS } from "./../../config/info";
import "./../../style/_globals.scss";
import EducationCard from "../../components/EducationCards/EducationCard";
function ExprienceSection() {
  return (
    <AnimationOnScroll
      animateIn="animate__slideInUp"
      animateOut="animate__slideInUp"
    >
      <div id="education" className={`${S.Container}`}>
        <header>
          <h1 className={S.Title}>
            <span className={S.Number}>02.</span> My Education{" "}
            <hr className={S.TitleLine}></hr>
          </h1>
          <div className="desktop">
            {EDUCATIONS.map((item) => {
              return <EducationCard key={item.id} data={item} />
            })}

          </div>
        </header>
      </div>
    </AnimationOnScroll>
  );
}

export default ExprienceSection;

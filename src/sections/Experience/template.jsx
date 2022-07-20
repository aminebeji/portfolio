import React from 'react'
import S from "./style.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Experience } from "./../../config/info"
import "./../../style/_globals.scss"
function ExprienceSection() {
  return (
    <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
      <div id="experience" className={`${S.Container}`} >
        <header>
          <h1 className={S.Title}><span className={S.Number}>02.</span> My Experience</h1>
          <hr></hr>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {Experience.map(((item, index) => {
                return <button className={index === 0 ? "nav-link active" : "nav-link"}
                  id={`nav-${item.tag}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${item.tag}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${item.tag}`}
                  aria-selected="true">
                  {item.company}
                </button>
              }))}


            </div>
          </nav>
          <div className="tab-content justify-content-center" id="nav-tabContent">
            {Experience.map((item, key) => {
              return <div className={key === 0 ? "tab-pane fade show active" : "tab-pane fade"}
                id={`nav-${item.tag}`}
                role="tabpanel"
                aria-labelledby={`nav-${item.tag}-tab`}
                tabindex="0"
              >
                <h1> {item.date} </h1>
                <p>{item.discription}</p>
                <a href={item.link} >Visit Web site</a>
              </div>
            })}

          </div>

        </header>
      </div>
    </AnimationOnScroll>

  )
}

export default ExprienceSection
import React from "react";
import S from "./style.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Experience } from "./../../config/info";
import "./../../style/_globals.scss";
function ExprienceSection() {
  return (
    <AnimationOnScroll
      animateIn="animate__slideInUp"
      animateOut="animate__slideInUp"
    >
      <div id="experience" className={`${S.Container}`}>
        <header>
          <h1 className={S.Title}>
            <span className={S.Number}>02.</span> My Experience{" "}
            <hr className={S.TitleLine}></hr>
          </h1>
          <div className="desktop">
            <div className=" d-flex align-items-start">
              <div
                className="d-flex align-items-start"
                id="nav-tab"
                role="tablist"
              >
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {Experience.map((item, index) => {
                    return (
                      <button
                        className={index === 0 ? "nav-link active" : "nav-link"}
                        id={`nav-${item.tag}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#nav-${item.tag}`}
                        type="button"
                        role="tab"
                        aria-controls={`nav-${item.tag}`}
                        aria-selected="true"
                      >
                        {item.company}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-content justify-content-center"
                id="nav-tabContent"
              >
                {Experience.map((item, key) => {
                  return (
                    <div
                      className={
                        key === 0
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id={`nav-${item.tag}`}
                      role="tabpanel"
                      aria-labelledby={`nav-${item.tag}-tab`}
                      tabindex="0"
                    >
                      <h1 className={S.PostTitle}>
                        {" "}
                        {item.post} <span>@ {item.company} </span>
                      </h1>
                      <h3 className={S.Date}> {item.date} </h3>
                      <ul>
                        {" "}
                        {item.discription.map((desc, index) => {
                          return (
                            <li className={S.ListDescription} key={index}>
                              {" "}
                              {desc}{" "}
                            </li>
                          );
                        })}{" "}
                      </ul>
                      {item.link && (
                        <a
                          href={item.link}
                          className={S.VisitWebsite}
                          target="_blank"
                        >
                          Visit Web site
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/** MOBILE VERSION  */}
          <div className="mobile">
            <nav>
              <div class="nav nav-tabs " id="nav-tab" role="tablist">
                {Experience.map((item, index) => {
                  return (
                    <button
                      className={index === 0 ? "nav-link active" : "nav-link"}
                      id={`nav-${item.tag}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#nav-${item.tag}-1`}
                      type="button"
                      role="tab"
                      aria-controls={`nav-${item.tag}-1`}
                      aria-selected="true"
                    >
                      {item.company}
                    </button>
                  );
                })}
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent1">
              {Experience.map((item, key) => {
                return (
                  <div
                    className={
                      key === 0 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id={`nav-${item.tag}-1`}
                    role="tabpanel"
                    aria-labelledby={`nav-${item.tag}-tab-1`}
                    tabindex="0"
                  >
                    <h1 className={S.PostTitle}>
                      {" "}
                      {item.post} <span>@ {item.company} </span>
                    </h1>
                    <h3 className={S.Date}> {item.date} </h3>
                    <ul>
                      {" "}
                      {item.discription.map((desc, index) => {
                        return (
                          <li className={S.ListDescription} key={index}>
                            {" "}
                            {desc}{" "}
                          </li>
                        );
                      })}{" "}
                    </ul>
                    {item.link && (
                      <a
                        href={item.link}
                        className={S.VisitWebsite}
                        target="_blank"
                      >
                        Visit Web site
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </header>
      </div>
    </AnimationOnScroll>
  );
}

export default ExprienceSection;

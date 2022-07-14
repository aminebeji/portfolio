import React from 'react'
import S from "./style.module.scss"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./../../style/global.scss"
function AboutMe() {

  let one = (<h6 className={`${S.Hello} `} >Hello welcome to my portfolio . I'm  </h6>)


  let two = (<h1 className={S.Name} > Amine Beji. </h1>)


  let three = (<h1 className={S.Title}>I make websites alive.</h1>)


  let four = (<p className={S.Paragraph}>
    I’m a Full Stack web developer, specializing  in building exceptional web applications.
    Currently, I’m focused on building accessible , human-centered projects for my portfolio.
  </p>)


  let five = (<button className={S.button}> Get In Touch </button>)


  let ItemsAbout = [one, two, three, four, five]


  return (
    <div className={`${S.Container}`} >
      <TransitionGroup component={"div"}>
        {ItemsAbout.map((item, i) => {
          return <CSSTransition key={i} classNames="fadeup" timeout={4000}>
            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
          </CSSTransition>
        })}
      </TransitionGroup>
    </div>
  )
}

export default AboutMe
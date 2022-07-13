import React from 'react'
import S from "./style.module.scss"
function AboutMe() {
  return (
    <div className={S.Container} >
      <h6 className={S.Hello} >Hello welcome to my portfolio . I'm  </h6>
      <h1 className={S.Name} > Amine Beji. </h1>
      <h1 className={S.Title}>I make websites alive.</h1>
      <p className={S.Paragraph}>
        I’m a Full Stack web developer, specializing  in building exceptional web applications.
        Currently, I’m focused on building accessible , human-centered projects for my portfolio.
      </p>
      <button className={S.button}> Get In Touch </button>
    </div>
  )
}

export default AboutMe
import React from 'react'
import S from "./style.module.scss"
import NavBar from '../../components_old/navBar/template';
import Accueil from '../../components_old/AccueilSection/template';
import ProjectSection from '../../components_old/ProjectsSections/template';
function HomePage() {
  return (
    <div className={S.Main} >
      <div className={S.NavBar} >  <NavBar /></div>
      <div className={S.Content} >
        <div id="home" className={S.Section} > <Accueil /> </div>
        <div id="about" className={S.Section} > <ProjectSection/> </div>
        <div id="contact" className={S.Section}> Section Three </div>
      </div>
    </div>
  )
}

export default HomePage
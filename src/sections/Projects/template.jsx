import React from 'react'
import S from "./style.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProfessionalProjects from '../../components/ProfessionalProjects/template';
function Projects() {
    return (
        <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
            <div id="my-project" className={S.Container}>
                <header>
                    <h1 className={S.Title}><span className={S.Number}>03.</span> My Projects</h1>
                    <hr></hr>
                </header>
                <ProfessionalProjects></ProfessionalProjects>
            </div>
        </AnimationOnScroll>
    )
}

export default Projects
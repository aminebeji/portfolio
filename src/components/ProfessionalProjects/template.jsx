import React from 'react'
import { PROFESIONNAL_PROJECTS } from '../../config/info'
import ProCard from '../projectCard/ProCard'
import S from "./style.module.scss"
function ProfessionalProjects() {
    return (
        <section>
            <h1 className={S.SectionTitle}>Some of my amazing projects</h1>
            <hr className={S.underTitle}></hr>
            <div className={S.projectContainer}>
                {PROFESIONNAL_PROJECTS.map((project) =>
                    <ProCard key={project.id} project={project}></ProCard>
                )}
            </div>

        </section>
    )
}

export default ProfessionalProjects
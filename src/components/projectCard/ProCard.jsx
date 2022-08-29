import React from 'react'
import Folder from '../../assets/svgs/Folder'
import S from "./style.module.scss"
import Github from '../../assets/svgs/github';
import LinkIcon from '../../assets/svgs/LinkIcon';
function ProCard({ project }) {
    return (
        <div className={S.proContainer}>
            <div className={S.TopProject} >
                <Folder></Folder>
                <div className={S.Links}>
                    {project.github && <a href={project.github} target="_blank" > <Github></Github></a>}
                    {project.link && <a href={project.link} target="_blank">  <LinkIcon></LinkIcon> </a>}
                </div>
            </div>
            <div className={S.ProContent}>
                <h1 className={S.Title}> {project.title} </h1>
                <hr></hr>
                <div className={S.description}> {project.description} </div>
                <div className={S.TechnoList}>
                    {project.techno.map((tech, index) => <span className={S.techno} key={index}>
                        {tech}
                    </span>)}
                </div>
            </div>
        </div>
    )
}

export default ProCard
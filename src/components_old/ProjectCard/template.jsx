import React from 'react'
import CummonButton from '../CummonButton/template'
import S from "./style.module.scss"
function ProjectCard({ project }) {
    console.log(project.logo)
    return (
        <section>
            <div className={S.container}>
                <div
                    style={{ backgroundImage: `url (${project.logo})` }}
                    className={S.backgroundImg}>
                    <div className={S.box}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={S.content}>
                            <h2>MProject 1</h2>
                            <p><a>All our modules are designed to play nicely with responsive of course.</a></p>
                            <CummonButton onClick={() => { console.log("clicked") }} title={"See More"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProjectCard
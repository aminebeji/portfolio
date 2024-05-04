import React from 'react'
import Github from '../../assets/svgs/github'
import Instagram from '../../assets/svgs/Instagram'
import Linkedin from '../../assets/svgs/Linkedin'
import S from "./style.module.scss"
import { Email, Links } from '../../config/info';

function Footer() {
    return (
        <div className={S.Footer} >
            <div className={`${S.Socials} animate__slideInLeft`}  >
                <a href={Links.github} target="_blank" ><Github></Github></a>
                <a href={Links.linkedIn} target="_blank"><Linkedin></Linkedin></a>
                <a href={Links.instagram} target="_blank"><Instagram></Instagram></a>
            </div>
            <div className={` ${S.EmailContainer} animate__slideInRight`}>
                <h1 className={S.Email}>
                    <a href={`mailto:${Email}`}>{Email} </a>
                </h1>
            </div>
        </div>
    )
}

export default Footer
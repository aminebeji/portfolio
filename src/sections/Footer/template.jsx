import React from 'react'
import Github from '../../assets/svgs/github'
import Instagram from '../../assets/svgs/Instagram'
import Linkedin from '../../assets/svgs/Linkedin'
import S from "./style.module.scss"

function Footer() {
    return (
        <div className={S.Footer} >
            <div className={`${S.Socials} animate__slideInLeft`}  >
                <a href="#"><Github></Github></a>
                <a href="#"><Linkedin></Linkedin></a>
                <a href="#"><Instagram></Instagram></a>
                <a href="#"><Linkedin></Linkedin></a>
            </div>
            <div className={` ${S.EmailContainer} animate__slideInRight`}>
                <h1 className={S.Email}>
                    <a href={"mailto:amine.beji001@gmail.com"}>amine.beji001@gmail.com</a>
                </h1>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import S from "./style.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';
const MyPhoto = require("./../../photos/photoBeji.jpg")
function InfoSection() {
    return (
        <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
        <div id="about-me" className={S.Container}>
            <header>
                <h1 className={S.Title}><span className={S.Number}>01.</span> About Me</h1>
                <hr></hr>

            </header>
            <div className={`${S.InfoContainer}`}>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className={S.ImageContainer}>
                <img alt="Amine Beji" src={MyPhoto} className={`${S.Image}`} />
                </div>
            </div>
        </div>
        </AnimationOnScroll>
    )
}

export default InfoSection
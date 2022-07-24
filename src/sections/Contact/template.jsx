import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import S from "./style.module.scss"
import { Email } from '../../config/info';
function Contact() {
    return (
        <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
            <div id="contact-me" className={S.Container}>
                <header >
                    <h1 className={S.Title}><span className={S.Number}>04.</span> Now what ?</h1>
                    <hr className={S.CentredLine}></hr>
                    <h1 className={S.BigTitle}> Get In Touch</h1>
                    <div className={S.Description}>
                    <p> So Thank for checking my protfolio hope you like it. </p>
                    <p> We can get in touch,text me on LinkedIn or Facebook  </p>
                    <p>Or to be more professional send me an Email.</p>
                    </div>
                    <a href={`mailto:${Email}`}  className={`${S.button} `}>Send Me an Email </a>
                </header>
            </div>
        </AnimationOnScroll>

    )
}

export default Contact
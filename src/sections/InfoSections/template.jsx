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
                            Hello! My name is <span className='HighLighted'>Amine Beji</span> and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2012 when I created my first <span className='HighLighted' >facebook account</span> facebook account , i was chocked how could someone create something like this and now I'm a <span className='HighLighted'>full stack web developer</span>  how cloned the facebook applications using React.js and Node.js .
                        </p>
                        <p>
                            After this adventure i choose to study Mutlimedia and web developpement in <a href="https://isitcom.rnu.tn/" target={"_blank"} ><abbr title="Institut Supérieur d'Informatique et des Technologies de Communication de Hammam Sousse" >ISITCOM</abbr></a>
                        </p>
                        <p>
                            I'm now working as full stack web developer by day and Javascript Instructor by Weekend .
                        </p>
                        <p>
                            Those Some of my favorite Technologies that i m using daily :
                            <ul className={S.TechnoList} >
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Html</li>
                                <li>Css/Scss</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Next.js</li>
                                <li>GoLang</li>
                            </ul>
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
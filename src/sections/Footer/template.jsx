import React from 'react'
import S from "./style.module.scss"

function Footer() {
    return (
        <div className={S.Footer} >
            <div className={S.Socials}  >
                <h1 className={S.Icons}>Fb</h1>
                <h1 className={S.Icons}>In</h1>
                <h1 className={S.Icons}>Hub</h1>
                <h1 className={S.Icons}>SOF</h1>
            </div>
            <div className={S.EmailContainer}>
                <h1 className={S.Email}><a href={"mailto:amine.beji001@gmail.com"}> amine.beji001@gmail.com </a></h1>
            </div>
        </div>
    )
}

export default Footer
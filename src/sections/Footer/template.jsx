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
            <div className={S.EmailContainer} orientation="right">
                <h1 className={S.Email}> amine.beji001@gmail.com </h1>
                <div className={S.Line} ></div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import S from "./style.module.scss"

function CummonButton({ onClick, title }) {
    return (
        <button onClick={onClick} className={`${S.ContactButton}`}>
            <div className={S.Corner}  ></div>
            <div className={S.LeftCorner} > </div>
            <div className={S.TopCorner} > </div>
            <div className={S.BottomCorner}  ></div>
            <div className={S.BottomLeftCorner} > </div>
            <div className={S.BottomTopCorner} > </div>

            {title}
        </button>
    )
}

export default CummonButton
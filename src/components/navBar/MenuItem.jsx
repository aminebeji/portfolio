import React from 'react'
import S from "./style.module.scss"

function MenuItem({ page }) {
    return (
        <li className={S.MenuItem} >
            <a href={page.link} > {page.title}</a>
        </li>
    )
}

export default MenuItem
import React from 'react'
import S from "./style.module.scss"
function NavBar() {
    const navItems = [{ href: "#about-me", title: "About Me" },
    { href: "#experience", title: "Experience" },
    { href: "#my-project", title: "My Project" },
    { href: "#contact-me", title: "Contact" }]
    return (
        <div className={`${S.NavBar} animate__slideInDown` }  >
            <h1 className={S.TitleLogo} >A.Beji</h1>
            <ul className={S.Menu} >
                {navItems.map((item, key) => {
                    return <li key={key}><a href={item.href}> <span>  0{key + 1}.</span> {item.title} </a></li>
                })}
                <li>
                    <button className={S.MyCV} >  My CV </button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
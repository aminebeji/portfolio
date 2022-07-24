import React, { useState } from 'react'
import S from "./style.module.scss"
import CV from "./../../assets/resume/beji_resume.pdf"
function NavBar() {
    const navItems = [{ href: "#about-me", title: "About Me" },
    { href: "#experience", title: "Experience" },
    { href: "#my-project", title: "My Project" },
    { href: "#contact-me", title: "Contact" }]
    const [Open, setOpen] = useState(false)
    const OnClick = () => {
        let element = document.getElementById("sideBar")
        let MenuNav = document.getElementById("menu")
        if (Open == true) {
            element.style.width = "0px"
            MenuNav.style.display = "none"
        } else {
            element.style.width = "150px"
            MenuNav.style.display = "flex"

        }
        setOpen(!Open)
    }
    return (
        <div className={`${S.NavBar} animate__slideInDown`}  >
            <h1 className={S.TitleLogo} ><a href="#intro">A.Beji</a></h1>
            <ul className={S.Menu} >
                {navItems.map((item, key) => {
                    return <li key={key}><a href={item.href}> <span>  0{key + 1}.</span> {item.title} </a></li>
                })}
                <li>
                    <a href={CV} target="_blank" className={S.MyCV} >  My CV </a>
                </li>
            </ul>
            <div onClick={OnClick} className={Open == true ? S.NavMenuOpen : S.NavMenu}>
                <div className={S.Line1}></div>
                <div className={S.Line2}></div>
                <div className={S.Line3}></div>
            </div>
            <div id="sideBar" className={`${S.SideBar}`}>
                <ul id="menu"  className={S.SideBarMenu} >
                    {navItems.map((item, key) => {
                        return <li key={key} onClick={OnClick} ><a href={item.href}> <span>  0{key + 1}.</span> {item.title} </a></li>
                    })}
                    <li>
                        <a href={CV} target="_blank" className={S.MyCV} >  My CV </a>
                    </li>
                </ul>
    
            </div>
        </div>
    )
}

export default NavBar
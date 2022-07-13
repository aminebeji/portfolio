import React from 'react'
import CummonButton from '../CummonButton/template';
import MenuItem from './MenuItem';
import S from "./style.module.scss"
function NavBar() {
  const pages = [
    { title: "Beji", link: "#home" },
    { title: "How's Beji", link: "#about" },
    { title: "Beji's Work", link: "#contact" },]
  return (
    <div>
      <div className={S.MainMenu}>
        <div className={`${S.Logo} el`} > Beji's World </div>
        <ul className={S.Menu} >
          {pages.map((page, index) => {
            return <MenuItem page={page} key={index} />
          })}
        </ul>
        <div className={`${S.ContainerButton}`}>
        </div>
        <CummonButton onClick={() => { console.log("clicked me !") }} title={"contact me"} />
      </div>
      <div className={S.MainSideBar} >
        Side Bar Button
      </div>
    </div>
  )
}

export default NavBar
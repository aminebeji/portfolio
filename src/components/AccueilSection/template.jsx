import React from 'react'
import S from "./style.module.scss"
function Accueil() {
  return (
    <div className={S.Main} >
      <div className={S.Content} >
        <h1 >   Amine Beji </h1>
        <h3> Web developer  </h3>
        <p>
          Hello and welcome to Beji's World . <br />
          Short Story  {"=>"} I'm a programmer and specially a web developer <br />
          I glad you visted my portfolio . <br />
        </p>
      </div>
      <div className={S.PhotoContainer} >
        <div className={S.box}>
          <div className={S.spinContainer}>
            <div className={S.shape}>
              <div className={S.bd}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accueil
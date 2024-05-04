import React, { useState } from 'react'
import Footer from '../sections/Footer/template'
import LoadingScreen from '../sections/LoadingScreen/template'
import NavBar from '../sections/NavBar/template'
import S from "./style.module.scss"
function Layout({ children }) {
    const [IsLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 4000)
    return (
        <div>
            {IsLoading ?
                <LoadingScreen></LoadingScreen> :
                <>
                    <NavBar />
                    <div className={`${S.Content} container`}> {children}</div>
                    <Footer></Footer>
                </>
            }
        </div>
    )
}

export default Layout
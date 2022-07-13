import React from 'react'
import Footer from '../sections/Footer/template'
import NavBar from '../sections/NavBar/template'
function Layout({ children }) {
    return (
        <div>
            <NavBar />
           <div className='container'> {children}</div>
          <Footer></Footer>
        </div>
    )
}

export default Layout
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Title from './Title'

function Layout({ children, title }) {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Title title={ title }/>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

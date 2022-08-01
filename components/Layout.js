import React from 'react';
import Navbar from './navbar';
//import cla from './Navbar.module.css';

function Layout(prop) {
    return (
        <div>
            <Navbar />
            <div>{prop.children}</div>
        </div>
    )
}

export default Layout
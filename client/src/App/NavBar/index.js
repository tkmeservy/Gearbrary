import React from 'react'
import {Link} from "react-router-dom"


function NavBar(props) {
    return (
        <div className = "navBarWrapper">
            <div className="top"></div>
            
            <Link className ="navLink top1"to= "/"></Link>
            <div className="empty2"></div>
            <Link className ="navLink link3"to= "/itemlist"></Link>
            <Link className ="navLink link4"to= "/triplist"></Link>
            
            
        </div>
    )
}

export default NavBar

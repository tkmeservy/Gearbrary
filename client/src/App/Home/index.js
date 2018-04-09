import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="homeWrapper">
            <div className="home">
            
                <Link className="homeLink" to="/triplist">Trip List</Link>
                <Link className="homeLink" to="/itemlist">Item List</Link>

            
            
                
            

                
            </div>
            
        </div>
    )
}

export default Home

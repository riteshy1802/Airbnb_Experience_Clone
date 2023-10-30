import React from "react"
import images from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={images} className="img" />
        </nav>
    )
}
import React from "react"
import imagegrid from "../images/photo-grid.png"

export default function Hero(){
    return(
        <div className="content">
            <div className="image-hero">
                <img src={imagegrid} className="img-grid" />
            </div>
            <div className="content-text">
                <h1 className="onlineexp">Online Experiences</h1>
                <p className="content-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
       
    )
}
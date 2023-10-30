import React from "react"
import star from "../images/star.png"

export default function Experiences(props){
    console.log(props);
    return(
        <div className="component1">
            <img src={props.imagelink} className="katie-zaf" />
            <div className="text1">
                <div className="text1-part1">
                    <img src={star} className="star-img" /> 
                    <p className="rating">{props.rate}<span>  {props.after_rating}</span></p>
                </div>
                
                <div className="text1-part2">
                    <p>{props.about}</p>
                    <p><span>{props.price}</span> person</p>
                </div>
            </div>
            
        </div>
        
    )
}
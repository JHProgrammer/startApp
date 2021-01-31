import React, { useState} from 'react'
import logo from '../Assets/Images/logoWithoutText.png';
import styleImage from './Loading.module.css';
import 'animate.css/animate.css'

export const Loading = () => {

    const [mouseHover, setMouseHover] = useState("");

    const onMouseEnter = () =>{
        setMouseHover("animate__animated animate__shakeY");
    }

    const onMouseLeave = () =>{
        setMouseHover("");
    }
    

    return (
        <div className={styleImage.divPrincipal}>
            <img src={logo} alt="logoWithoutText.png" className={styleImage.divPrincipal_logo + " fa fa-spin"}/>
            <div 
                className={styleImage.divPrincipal_div + " " + mouseHover}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <span className={styleImage.divPrincipal_div_textLogo}>
                    StartApp.pe
                </span>
                <span className={styleImage.divPrincipal_div_textLogo + " " + styleImage.divPrincipal_div_Since}> 
                    Since 2021
                </span>
            </div>
            
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show,handleshow] =useState(false);

    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleshow(true);
        }else{
            handleshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener("scroll",transitionNavBar)
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
           <div className='nav_contents'>
           <img className="nav_logo" alt="" src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' /> 
           
           </div>
        </div>
    )
}

export default Nav

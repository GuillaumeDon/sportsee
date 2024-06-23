import React from "react";
import Logo from "../Logo";

function Nav({elem1, elem2, elem3, elem4}){
    return(
        <div className="nav-container">
        
        <ul className="nav-container-list">
        <Logo/>
        <li className="nav-container-list-item">{elem1}</li>
        <li className="nav-container-list-item">{elem2}</li>        
        <li className="nav-container-list-item">{elem3}</li>
        <li className="nav-container-list-item">{elem4}</li>
         </ul>
        </div>
    )
}

export default Nav;
import React from "react";
import Logo from "../Logo";

function Nav({elem1, elem2, elem3, elem4}){
    return(
        <div className="nav-container">
        
        <ul className="nav-container-list">
        <Logo/>
        <li className="nav-container-list-item"><a href="#">{elem1}</a></li>
        <li className="nav-container-list-item"><a href="#">{elem2}</a></li>
        <li className="nav-container-list-item"><a href="#">{elem3}</a></li>
        <li className="nav-container-list-item"><a href="#">{elem4}</a></li>
        </ul>
        </div>
    )
}

export default Nav;
import React from "react";


function Nav({elem1, elem2, elem3, elem4, children,classContainer, classContainerList, classContainerListItem}){
    return(
        // <div className="nav-container">
        <div className={classContainer}>
        
        <ul className={classContainerList}>
        {children}
        <li className={classContainerListItem}><a href="#">{elem1}</a></li>
        <li className={classContainerListItem}><a href="#">{elem2}</a></li>
        <li className={classContainerListItem}><a href="#">{elem3}</a></li>
        <li className={classContainerListItem}><a href="#">{elem4}</a></li>
         </ul>
        </div>
    )
}

export default Nav;
import React from "react";
import Logo from "../Logo";

function TopBar() {
  return (
    <div className="topBar">
        <Logo />
        
        <ul className="topBar-nav">

          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">Profil</a>
          </li>
          <li>
            <a href="/contact">Réglage</a>
          </li>
          <li>
            <a href="/contact">Communauté</a>
          </li>
        </ul>
   
    </div>
  );
}

export default TopBar;
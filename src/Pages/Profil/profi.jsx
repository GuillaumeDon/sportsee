import React from "react";
import Banner from "../../Components/Banner";
import Nav from "../../Components/Nav";
import Logo from "../../Components/Logo";

function Profil() {
  return (
    <div>
      
      <Banner classNameBanner="top-banner">
      <Nav
          classContainer="nav-container-top"
          classContainerList="nav-container-top-list"
          classContainerListItem="nav-container-top-list-item"
           elem1={"Accueil"}
           elem2={"Profil"}
           elem3={"Réglage"}
           elem4={"Communauté"}>
      <Logo/>
 
      </Nav>
      </Banner>
      <Banner classNameBanner="bottom-banner">
      <Nav
          classContainer="nav-container-bottom"
          classContainerList="nav-container-bottom-list"
          classContainerListItem="nav-container-bottom-list-item"
           elem1={"Image 1"}
           elem2={"Image 2"}
           elem3={"Image 3"}
           elem4={"Image 4"}>
      
      <p className="nav-container-bottom-list-item copyright">Copiryght, SportSee 2020</p>
      </Nav>
      
      </Banner>
    </div>
  );
}

export default Profil;
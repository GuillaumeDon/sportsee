import React from "react";
import Banner from "../../Components/Banner";
import Nav from "../../Components/Nav";

function Profil() {
  return (
    <div>
      
      <Banner classNameBanner="top-banner">
      <Nav
      elem1={"Accueil"}
      elem2={"Profil"}
      elem3={"Réglage"}
      elem4={"Communauté"}
      />
      </Banner>
            <Banner
      classNameBanner="bottom-banner"
      />
    </div>
  );
}

export default Profil;
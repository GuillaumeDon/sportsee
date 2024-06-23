import React from "react";
import Banner from "../../Components/Banner";
import Nav from "../../Components/Nav";

function Profil() {
  return (
    <div>
      
      <Banner classNameBanner="top-banner">
      <Nav
      elem1={"Home"}
      elem2={"About"}
      elem3={"Services"}
      elem4={"Contact"}
      />
      </Banner>
            <Banner
      classNameBanner="bottom-banner"
      />
    </div>
  );
}

export default Profil;
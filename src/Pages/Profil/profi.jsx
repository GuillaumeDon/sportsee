import React from "react";
import Banner from "../../Components/Banner";
import Nav from "../../Components/Nav";

function Profil() {
  return (
    <div>
      
      <Banner classNameBanner="top-banner">
      <Nav/>
      </Banner>
            <Banner
      classNameBanner="bottom-banner"
      />
    </div>
  );
}

export default Profil;
import React from "react";
import Nutriments from "../../components/Nutriments";
import FirstContent from "../../components/FirstContent";
import Graphics from "../../components/Graphics";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import Welcome from "../../components/Welcome";



function Profil() {
  return (
    <div className="profil-container">
      <TopBar />
      <div className="profil-content">
        <SideBar />
        <div className="main-content">
          <Welcome />
          <div className="profil-all-results">
          <div className="resultats-contents">
        <FirstContent/>
          <div className="resultats-content-2">
<Graphics classNameGraphics="resultats-content-2-graph1"/>
<Graphics classNameGraphics="resultats-content-2-graph2"/>
<Graphics classNameGraphics="resultats-content-2-graph3"/>

            </div>
          </div>
      <Nutriments/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;

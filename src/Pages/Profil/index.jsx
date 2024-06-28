import React from "react";
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
          <div className="resultats-contents">
          <div className="resultats-content-1">

          </div>
          <div className="resultats-content-2">

            <div className="resultats-content-2-graph1">
            
            </div>
            <div className="resultats-content-2-graph2">
            
            </div>
                      <div className="resultats-content-2-graph3">
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;

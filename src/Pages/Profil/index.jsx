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
        <Welcome/>
        <div className="resultats">
          <div className="resultats-graphics">
          <div className="resultats-graphics-principal">
            
            </div>
            <div className="resultats-graphics-graph1">
            
            </div>
            <div className="resultats-graphics-graph2">
            
            </div>
            <div className="resultats-graphics-graph3">
            
            </div>
          </div>
          <div className="resultats-nutriments"></div>
        </div>
        

       </div>
    </div>
  );
}

export default Profil;
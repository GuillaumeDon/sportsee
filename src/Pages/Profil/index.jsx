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
        

       </div>
    </div>
  );
}

export default Profil;
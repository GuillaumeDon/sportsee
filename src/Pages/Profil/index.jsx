import React from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";


function Profil() {
  return (
    <div className="profil-container">
       <TopBar />
       <div className="profil-content-main-content">
        <SideBar />

       </div>
    </div>
  );
}

export default Profil;
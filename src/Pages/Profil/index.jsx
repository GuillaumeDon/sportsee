import React from "react";
import CaloriesPicture from "../../assets/calories.png";
import ProteinsPicture from "../../assets/proteins.png";
import GlucidsPicture from "../../assets/glucids.png";
import LipidsPicture from "../../assets/lipids.png";

import Square from "../../components/Square";
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
          <div className="resultats-nutriments">
          <div className="resultats-nutriments-1">

          <Square squareStyle ="square-nutriments-1" squareContent={CaloriesPicture} altContent="Flamme" />
          <div className="resultats-nutriments-1-text">
            <h3 className="resultats-nutriments-1-text-title"> 1500 Calories</h3>
            <p className="resultats-nutriments-1-text-para">Calories</p>
          </div>
        
        </div>
        <div className="resultats-nutriments-2">
        
        <Square squareStyle ="square-nutriments-2" squareContent={ProteinsPicture} altContent="Pouet" />
          <div className="resultats-nutriments-2-text">
            <h3 className="resultats-nutriments-2-text-title"> 2000 proteines</h3>
            <p className="resultats-nutriments-2-text-para">Protéines</p>
          </div>
        
        </div>
        <div className="resultats-nutriments-3">
        
        <Square squareStyle ="square-nutriments-3" squareContent={GlucidsPicture} altContent="Pomme" />
          <div className="resultats-nutriments-3-text">
            <h3 className="resultats-nutriments-3-text-title"> 300 glucides</h3>
            <p className="resultats-nutriments-3-text-para">Glucides</p>
          </div>
        
        </div>
        <div className="resultats-nutriments-4">
        
        <Square squareStyle ="square-nutriments-4" squareContent={LipidsPicture} altContent="Burger" />
          <div className="resultats-nutriments-4-text">
            <h3 className="resultats-nutriments-4-text-title"> 1500 Lipids</h3>
            <p className="resultats-nutriments-4-text-para">Lipides</p>
          </div>
        
        </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;

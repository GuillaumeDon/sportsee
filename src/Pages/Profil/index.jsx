import React from "react";
import CaloriesPicture from "../../assets/calories.png";

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
            <h3 className="resultats-nutriments-1-text-title"> 1500Calories</h3>
            <p className="resultats-nutriments-1-text-para">Calories</p>
          </div>
        
        </div>
        <div className="resultats-nutriments-2">
        
        <Square squareStyle ="square-nutriments-1" squareContent={CaloriesPicture} altContent="Flamme" />
          <div className="resultats-nutriments-1-text">
            <h3 className="resultats-nutriments-1-text-title"> 1500Calories</h3>
            <p className="resultats-nutriments-1-text-para">Calories</p>
          </div>
        
        </div>
        <div className="resultats-nutriments-3">
        
        <Square squareStyle ="square-nutriments-1" squareContent={CaloriesPicture} altContent="Flamme" />
          <div className="resultats-nutriments-1-text">
            <h3 className="resultats-nutriments-1-text-title"> 1500Calories</h3>
            <p className="resultats-nutriments-1-text-para">Calories</p>
          </div>
        
        </div>
        <div className="resultats-nutriments-4">
        
        <Square squareStyle ="square-nutriments-1" squareContent={CaloriesPicture} altContent="Flamme" />
          <div className="resultats-nutriments-1-text">
            <h3 className="resultats-nutriments-1-text-title"> 1500Calories</h3>
            <p className="resultats-nutriments-1-text-para">Calories</p>
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

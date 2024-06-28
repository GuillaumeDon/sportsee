import React from "react";
import Square from "../Square";
import BikePicture from "../../assets/bike.png";
import YogaPicture from "../../assets/yoga.png";
import SwimPicture from "../../assets/swim.png";
import GymPicture from "../../assets/gym.png";

function SideBar() {
  return (
    <div className="sideBar">
      <ul className="sideBar-nav">
        <li>
          <a href="/"><Square squareContent={YogaPicture} altContent="Yoga" /></a>
        </li>
        <li>
          <a href="/"><Square squareContent={SwimPicture} altContent="Nage" /></a>
        </li>
        <li>
          <a href="/"><Square squareContent={BikePicture} altContent="Vélo" /></a>
        </li>
        <li>
          <a href="/"><Square squareContent={GymPicture} altContent="Gym" /></a>
        </li>
      </ul>
      <p className="sideBar-copyright">Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideBar;

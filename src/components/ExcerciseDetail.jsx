import React from "react";
import NavBar from "./NavBar";
import HeroDetail from "./HeroDetail";
import Allvidoes from "./Allvidoes";
import SimilarEquipement from "./SimilarEquipement";
import SimilarMuscle from "./SimilarMuscle";

const ExcerciseDetail = () => {
  return (
    <div>
      <div className="w-1/2 sticky">
        <NavBar />
      </div>
      <HeroDetail />
      <Allvidoes />
      <SimilarMuscle />
      <SimilarEquipement />
    </div>
  );
};

export default ExcerciseDetail;

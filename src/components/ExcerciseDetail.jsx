import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HeroDetail from "./HeroDetail";

import { useParams } from "react-router-dom";
import { excerciseOptions, fetchData, youtubeOptions } from "./FetchData";
import Loader from "./Loader";
import Allvideos from "./Allvideos";
import SimilarExercises from "./SimilarExercises";
import Footer from "./Footer";s

const ExcerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState();
  const [exerciseVideo, setExerciseVideo] = useState(null);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState();
  const [equipmentExercise, setEquipmentExercise] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchExcerciseData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchURl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`,
        excerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchURl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideo(exerciseVideosData.contents);
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`,
        excerciseOptions
      );
      setTargetMuscleExercise(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`,
        excerciseOptions
      );
      setEquipmentExercise(equimentExercisesData);
    };
    fetchExcerciseData();
  }, [id]);

  if (!exerciseDetail) {
    return <Loader />;
  }

  return (
    <div>
      <div className="h-screen">
        <div className="w-1/2 sticky">
          <NavBar />
        </div>
        <HeroDetail exerciseDetail={exerciseDetail} />
      </div>

      <Allvideos exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercise={targetMuscleExercise}
        equipmentExercise={equipmentExercise}
      />
      <Footer />
    </div>
  );
};

export default ExcerciseDetail;

import React from "react";
import Loader from "./Loader";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SimilarExercises = ({ equipmentExercise, targetMuscleExercise }) => {
  return (
    <div>
      <p>Similar Target Muscle Exercises</p>
      {targetMuscleExercise.length !== 0 ? (
        <HorizontalScrollBar data={targetMuscleExercise} />
      ) : (
        <Loader />
      )}
      <p>Similar Equipment Exercises</p>
      {targetMuscleExercise.length !== 0 ? (
        <HorizontalScrollBar data={targetMuscleExercise} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SimilarExercises;

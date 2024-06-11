import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = (props) => {
  const { workout } = props;
  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={["The", "DANGER", "zone"]}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
            console.log(exercise)
          return <ExerciseCard key={index} exercise={exercise} index={index} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;

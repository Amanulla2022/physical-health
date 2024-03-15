import React from "react";

const IndividualCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="w-full h-auto"
      />
      <h2 className="text-xl font-semibold uppercase">{exercise.name}</h2>
      <p className="text-green-500 uppercase">{exercise.target}</p>
      <p className="text-blue-500">{exercise.bodyPart}</p>
    </div>
  );
};

export default IndividualCard;

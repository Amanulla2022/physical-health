import React, { useEffect, useState } from "react";
import axios from "axios";
import IndividualCard from "./IndividualCard";

const ExerciseList = () => {
  const [start, setStart] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [searchedData, setSearchedData] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, [start]);

  const fetchData = async () => {
    const url = `https://exercisedb.p.rapidapi.com/exercises`;
    const options = {
      headers: {
        "X-RapidAPI-Key": "b87acf167dmshe61573f5ff92cc9p1219c8jsn0d95b571164e",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
      params: {
        start: start,
        limit: 20, // Fetch 20 exercises
      },
    };

    try {
      const response = await axios.get(url, options);
      const data = response.data;

      setExercises([...exercises, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const filteredResults = exercises.filter(
      (exercise) =>
        exercise.target.toLowerCase().includes(searchedData.toLowerCase()) ||
        exercise.bodyPart.toLowerCase().includes(searchedData.toLowerCase()) ||
        exercise.name.toLowerCase().includes(searchedData.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [exercises, searchedData]);

  const handleSearchChange = (event) => {
    setSearchedData(event.target.value);
  };

  const loadMoreCards = () => {
    setStart(start + 20);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-gray-600 underline uppercase">
        Exercise List
      </h1>
      <input
        type="text"
        placeholder="Search Exercises...."
        className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4"
        value={searchedData}
        onChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(searchedData.length > 0 ? searchResults : exercises).map(
          (exercise) => (
            <IndividualCard key={exercise.id} exercise={exercise} />
          )
        )}
      </div>

      <div className="mt-4">
        <button
          onClick={loadMoreCards}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Load More
        </button>
      </div>
    </main>
  );
};

export default ExerciseList;

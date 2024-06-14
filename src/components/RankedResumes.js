// src/components/RankedResumes.js
import React, { useState, useEffect } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import resumesData from "../data/resumes.json"; // Import existing data
import axios from "axios"; // Import Axios for HTTP requests (you may need to install axios)

const RankedResumes = () => {
  const [view, setView] = useState("grid");
  const [loadedData, setLoadedData] = useState([]);

  // Function to fetch data from JSON file
  const fetchData = async () => {
    try {
      const response = await axios.get("/data/resumes.json"); // Adjust path if necessary
      setLoadedData(response.data); // Set loaded data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  // Combine existing data with loaded data
  const combinedResumes = [...resumesData, ...loadedData];

  return (
    <div className="p-6">
      <button
        className="mb-4 px-4 py-2 bg-customblue text-white rounded-md"
        onClick={toggleView}
      >
        Toggle View
      </button>
      {view === "grid" ? (
        <GridView resumes={combinedResumes} />
      ) : (
        <ListView resumes={combinedResumes} />
      )}
    </div>
  );
};

export default RankedResumes;

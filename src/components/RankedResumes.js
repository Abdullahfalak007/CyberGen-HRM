// src/components/RankedResumes.js
import React, { useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const resumesData = [
  {
    id: 1,
    name: "John Doe",
    similarityScore: 92,
    appliedDate: "2024-06-01",
  },
  // Add more dummy data here...
];

const RankedResumes = () => {
  const [view, setView] = useState("grid");

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  return (
    <div className="p-6">
      <button
        className="mb-4 px-4 py-2 bg-customblue text-white rounded-md"
        onClick={toggleView}
      >
        Toggle View
      </button>
      {view === "grid" ? (
        <GridView resumes={resumesData} />
      ) : (
        <ListView resumes={resumesData} />
      )}
    </div>
  );
};

export default RankedResumes;

// src/components/ResumeDetailsGridBox.js
import React from "react";

const getColorForScore = (score) => {
  if (score > 70) return "bg-green-500";
  if (score >= 40) return "bg-orange-500";
  return "bg-red-500";
};

const ResumeDetailsGridBox = ({ resume }) => {
  const scoreColor = getColorForScore(resume.similarityScore);

  return (
    <div className="border p-4 m-2 rounded-md shadow-md w-60">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center bg-customblue p-1 rounded">
          <img
            src={"../../ask_ai_icon.svg"}
            alt="Ask AI Icon"
            className="w-6 h-6"
          />
          <span className="text-white ml-2">Ask AI</span>
        </div>
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <p>ID: {resume.id}</p>
        <p className={`px-2 py-1 rounded-md text-white ${scoreColor}`}>
          {resume.similarityScore}%
        </p>
      </div>
      <p className="text-customblue mb-2">Name: {resume.name}</p>
      <p className="mb-2">Applied on: {resume.appliedDate}</p>
      <div className="flex justify-between mb-2">
        <button className="bg-customblue text-white py-1 px-2 rounded">
          Original Resume
        </button>
        <button className="bg-customblue text-white py-1 px-2 rounded">
          Resume Branded
        </button>
        <button className="bg-customblue text-white py-1 px-2 rounded">
          Resume Summary
        </button>
      </div>
      <div className="flex justify-between">
        <button className="border border-customblue text-customblue py-1 px-2 rounded">
          Approve Applicant
        </button>
        <button className="border border-customblue text-customblue py-1 px-2 rounded">
          Not Considered
        </button>
      </div>
    </div>
  );
};

export default ResumeDetailsGridBox;

("../../ask_ai_icon.svg");

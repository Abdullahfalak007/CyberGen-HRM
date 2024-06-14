// src/components/ResumeDetailsGridBox.js
import React from "react";

const ResumeDetailsGridBox = ({ resume }) => {
  return (
    <div className="border p-4 m-2 rounded-md shadow-md w-60">
      <h3 className="text-lg font-semibold">{resume.name}</h3>
      <p>Similarity Score: {resume.similarityScore}%</p>
      <p>Applied on: {resume.appliedDate}</p>
    </div>
  );
};

export default ResumeDetailsGridBox;

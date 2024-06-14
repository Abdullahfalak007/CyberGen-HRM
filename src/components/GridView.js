// src/components/GridView.js
import React from "react";
import ResumeDetailsGridBox from "./ResumeDetailsGridBox";

const GridView = ({ resumes }) => {
  return (
    <div className="flex flex-wrap">
      {resumes.map((resume) => (
        <ResumeDetailsGridBox key={resume.id} resume={resume} />
      ))}
    </div>
  );
};

export default GridView;

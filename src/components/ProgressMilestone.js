// ProgressMilestone.js

import React, { useState, useEffect } from "react";

const ProgressMilestone = ({ jobSelected, resumeUploaded }) => {
  const [steps, setSteps] = useState([
    { step: 1, label: "Select Job Post" },
    { step: 2, label: "Analyzer" },
    { step: 3, label: "Ranked Resume" },
  ]);

  useEffect(() => {
    // Update steps based on jobSelected and resumeUploaded
    const updatedSteps = steps.map((step) => {
      if (step.step === 1) {
        return {
          ...step,
          active: jobSelected,
          completed: jobSelected,
        };
      } else if (step.step === 2) {
        return {
          ...step,
          active: jobSelected && resumeUploaded,
          completed: resumeUploaded,
        };
      } else {
        return {
          ...step,
          active: jobSelected && resumeUploaded,
          completed: jobSelected && resumeUploaded, // Ensure step 3 is only completed when both jobSelected and resumeUploaded are true
        };
      }
    });
    setSteps(updatedSteps);
  }, [jobSelected, resumeUploaded]);

  return (
    <div className="flex justify-center items-center m-6">
      {steps.map((step, index) => (
        <React.Fragment key={step.step}>
          <div className="flex flex-col items-center">
            <div
              id={`step${step.step}-circle`}
              className={`relative flex justify-center items-center w-14 h-14 ${
                step.active
                  ? "bg-customblue text-white"
                  : "bg-white text-customblue"
              } border-2 border-customblue rounded-full font-bold font-display text-base`}
            >
              {step.completed ? <>&#10003;</> : step.step}
            </div>
            <div
              id={`step${step.step}-label`}
              className={`mt-6 px-4 py-3 rounded-lg text-center ${
                step.active
                  ? "bg-gradient-to-r from-customblue to-customlightblue text-white"
                  : "bg-white text-customblue"
              } border-2 border-customblue`}
            >
              {step.label}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex items-center">
              <img
                src="../../arrow.svg"
                alt="Arrow"
                className={index === 0 ? "w-20 mb-20 mr-2" : "w-20 mb-20 ml-2"}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressMilestone;
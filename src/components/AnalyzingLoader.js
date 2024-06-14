import React, { useEffect } from "react";

const AnalyzingLoader = ({ onExtractionComplete }) => {
  useEffect(() => {
    // Simulate extraction process
    setTimeout(() => {
      onExtractionComplete();
    }, 3000); // Adjust the timeout as needed
  }, [onExtractionComplete]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader">Loading...</div>
    </div>
  );
};

export default AnalyzingLoader;

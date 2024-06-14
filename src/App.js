import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Form from "./components/Form"; // Renamed MainContent.js to Form.js
import AnalyzingLoader from "./components/AnalyzingLoader";
import RankedResumes from "./components/RankedResumes";
import ProgressMilestone from "./components/ProgressMilestone";
import "tailwindcss/tailwind.css";

function App() {
  const [jobSelected, setJobSelected] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleJobSelect = (event) => {
    setJobSelected(event.target.value !== "Select Job Post");
  };

  const handleFileUpload = (event) => {
    setResumeUploaded(event.target.files.length > 0);
  };

  const handleNextClick = () => {
    if (resumeUploaded) {
      setNextClicked(true);
      setIsAnalyzing(true);
      // Simulate file extraction process
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000); // Simulate a 3-second analysis delay
    }
  };

  return (
    <div className="flex h-full bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-selectedbg">
        <Navbar />
        <ProgressMilestone
          jobSelected={jobSelected}
          resumeUploaded={resumeUploaded}
          nextClicked={nextClicked}
        />
        {!nextClicked ? (
          <Form
            onJobSelect={handleJobSelect}
            onFileUpload={handleFileUpload}
            onNextClick={handleNextClick}
          />
        ) : isAnalyzing ? (
          <AnalyzingLoader />
        ) : (
          analysisComplete && <RankedResumes />
        )}
      </div>
    </div>
  );
}

export default App;

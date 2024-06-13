// App.js

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ProgressMilestone from "./components/ProgressMilestone";
import "tailwindcss/tailwind.css";

function App() {
  const [jobSelected, setJobSelected] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const handleJobSelect = (event) => {
    setJobSelected(event.target.value !== "Select Job Post");
  };

  const handleFileUpload = (event) => {
    setResumeUploaded(event.target.files.length > 0);
  };

  return (
    <div className="flex h-full bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-selectedbg">
        <Navbar />
        <ProgressMilestone
          jobSelected={jobSelected}
          resumeUploaded={resumeUploaded}
        />
        <MainContent
          onJobSelect={handleJobSelect}
          onFileUpload={handleFileUpload}
        />
      </div>
    </div>
  );
}

export default App;

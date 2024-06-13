import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden bg-selectedbg">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

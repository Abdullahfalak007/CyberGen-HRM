// MainContent.js

import React from "react";

const MainContent = ({ onJobSelect, onFileUpload }) => {
  return (
    <div className="flex-1 p-6">
      <div
        id="progress-container"
        className="flex justify-center items-center m-6"
      ></div>
      <div className="flex justify-center mt-3">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 p-3 md:mr-1 mb-3">
            <h2 className="text-lg font-display font-semibold mb-3">
              Select Job <span className="text-red-500">*</span>
            </h2>
            <div className="relative">
              <select
                id="job-select"
                className="block w-full px-4 py-2 rounded-md bg-white border-b border-gray-300 focus:outline-none focus:border-blue-500 shadow-bottom shadow-md"
                onChange={onJobSelect}
              >
                <option defaultValue>Select Job Post</option>
                <option>Job Post 1</option>
                <option>Job Post 2</option>
                <option>Job Post 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
            <h2 className="text-lg font-display font-semibold mb-3 mt-3">
              Upload Resume
            </h2>
            <label className="block">
              <input
                type="file"
                id="resume-upload"
                className="hidden h-12"
                onChange={onFileUpload}
              />
              <div className="w-full h-[16.5rem] p-3 flex items-center justify-center rounded-md cursor-pointer border-b border-gray-300 shadow-bottom shadow-md">
                <img
                  src="../../Upload.svg"
                  alt="Upload Icon"
                  className="w-14 h-14 mr-2"
                />
                <span>Upload Resume</span>
              </div>
            </label>
          </div>
          <div className="w-full md:w-1/2 p-3 md:ml-1">
            <h2 className="text-lg font-display font-semibold mb-3">
              Job Requirement <span className="text-red-500">*</span>
            </h2>
            <textarea
              className="w-full h-[7.31rem] px-4 py-2 mb-3 rounded-md cursor-pointer border-b border-gray-300 shadow-bottom shadow-md resize-none"
              placeholder="Enter job requirements..."
            ></textarea>
            <h2 className="text-lg font-display font-semibold mb-3">
              Skills <span className="text-red-500">*</span>
            </h2>
            <div
              id="dynamicContainer"
              className="flex flex-wrap border-b min-h-[10rem] border-gray-300 shadow-bottom shadow-md p-4"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="mx-2 w-32 h-8 text-white bg-customblue rounded-md font-display font-semibold shadow-bottom text-base">
          Save
        </button>
        <button
          id="next-button"
          className="mx-2 w-32 h-8 text-white bg-customblue rounded-md font-display font-semibold shadow-bottom text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainContent;

// Shimmer.jsx
import React from "react";

const Shimmer = () => {
  return (
    <div
      role="status"
      className="w-72 h-80 p-4 ml-8 mt-10 border border-gray-200 rounded-md shadow-md animate-pulse dark:border-gray-700"
    >
      <div className="h-40 w-full mb-4 bg-gray-300 rounded-md dark:bg-gray-700"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Shimmer;

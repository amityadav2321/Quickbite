import React from "react";

const Shimmer1 = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 animate-pulse">
      
      <div className="h-8 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>

     
      <div className="inline-block px-5 py-2 mb-6">
        <div className="h-6 w-24 bg-gray-300 rounded"></div>
      </div>

      
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="flex justify-between bg-white p-4 rounded-lg border border-gray-200 mb-6 shadow-sm"
        >
          
          <div className="flex-1 pr-4">
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-100 rounded w-full mb-1"></div>
            <div className="h-3 bg-gray-100 rounded w-5/6 mb-1"></div>
          </div>

         
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className="w-full h-full bg-gray-200 rounded-md border mb-2"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-300 h-6 w-16 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer1;

import React from "react";

const DashboardLayout1 = ({ name }) => {
  return (
    <>
      <div>
        {/* <p className="text-white font-bold text-2xl  transform transition-all duration-300 hover:scale-105">
          {" "}
          {name}
        </p> */}
      </div>
      <div className="flex flex-col h-screen bg-gray-100">
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Content Area 1</h3>
            <p className="text-gray-600">Some description text here.</p>
          </div>
          <div className="bg-red-500 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Dummy Component</h3>
            <p>Red background content.</p>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Content Area 2</h3>
            <p className="text-gray-600">Some description text here.</p>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Content Area 3</h3>
            <p className="text-gray-600">Some description text here.</p>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Content Area 4</h3>
            <p className="text-gray-600">Some description text here.</p>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="font-bold text-lg">Content Area 5</h3>
            <p className="text-gray-600">Some description text here.</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout1;

import React from "react";

const DashboardLayout1 = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Left Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800">Total Revenue</h2>
          <div className="h-32 bg-blue-200 mt-4 rounded-lg"></div>{" "}
          {/* Dummy Component */}
          <div className="mt-2 text-right text-blue-600">+20% This Month</div>
        </div>

        {/* Top Middle Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-800">Profit Report</h2>
          <div className="h-32 bg-green-200 mt-4 rounded-lg"></div>{" "}
          {/* Dummy Component */}
          <div className="mt-2 text-right text-green-600">
            +15% This Quarter
          </div>
        </div>

        {/* Top Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-500">
          <h2 className="text-xl font-semibold text-gray-800">
            Order Statistics
          </h2>
          <div className="h-32 bg-yellow-200 mt-4 rounded-lg"></div>{" "}
          {/* Dummy Component */}
          <div className="mt-2 text-right text-yellow-600">8,258 Orders</div>
        </div>

        {/* Middle Left Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold text-gray-800">Transactions</h2>
          <div className="h-32 bg-purple-200 mt-4 rounded-lg"></div>{" "}
          {/* Dummy Component */}
          <div className="mt-2 text-right text-purple-600">
            Latest Transactions
          </div>
        </div>

        {/* Middle Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500">
          <h2 className="text-xl font-semibold text-gray-800">
            Activity Timeline
          </h2>
          <div className="h-32 bg-red-200 mt-4 rounded-lg"></div>{" "}
          {/* Dummy Component */}
          <div className="mt-2 text-right text-red-600">Recent Activities</div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-3 border-l-4 border-teal-500">
          <h2 className="text-xl font-semibold text-gray-800">
            Browser & Operating System
          </h2>
          <div className="h-32 bg-teal-200 mt-4 rounded-lg"></div>{" "}
          {/* Dummy Component */}
          <div className="mt-2 text-right text-teal-600">User Insights</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout1;

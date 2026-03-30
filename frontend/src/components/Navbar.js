import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-xl mb-6">
      <h1 className="text-2xl font-bold gradient-text">
        AI Hire Tracker
      </h1>

      <div className="space-x-4">
        <button
          onClick={() => setPage("dashboard")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("add")}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          + Add Job
        </button>
      </div>
    </div>
  );
};

export default Navbar;
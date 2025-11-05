"use client";
import React from "react";

const Topbar = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Inventory Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="text-sm bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;

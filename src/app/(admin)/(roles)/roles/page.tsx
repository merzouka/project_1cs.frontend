"use client";
import React from "react";
import ResponsiveTable from "../components/table";

const Page = () => {
  // Sample data array
  const data = [
    ["Da", "HALLOUCHE Abdessamed", "Data 6", "", "", "", "", ""],
    ["Data 4", "Data 5", "Data 6", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
    ["Data 1", "Data 2", "Data 3", "", "", "", "", ""],
  ];

  return (
    <div>
      <div className="w-full pt-3 mb-4 lg:mb-8">
        <h4 className="text-xl md:text-4xl font-semibold mb-1 md:mb-2">
          Les utilisateurs
        </h4>
      </div>
      <div className="px-4">
        <ResponsiveTable data={data} />
      </div>
    </div>
  );
};

export default Page;

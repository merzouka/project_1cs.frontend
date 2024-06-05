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
        <h4 className="py-[20px] px-4 text-left border-b-0 font-medium text-gray-800 text-[28px]">
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

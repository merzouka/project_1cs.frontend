"use client";
import React, { useState } from "react";
import DropdownMenu from "./menu";
import { provinces } from "@/constants/provinces"; // Make sure this path is correct
import { City as CityInterface } from "@/constants/cities";
import CitySearch from "./citysearch";

const MAX_CITIES_PER_ROW = 5;
const ROLE_COLUMN_INDEX = 2;
const WILAYA_COLUMN_INDEX = 3;
const COMMUNES_COLUMN_INDEX = 4;
const ACTION_COLUMN_INDEX = 5;

// Define the Props interface
interface Props {
  data: Array<any[]>; // Specify the type of 'data'
}

// Define the ResponsiveTable component
const ResponsiveTable: React.FC<Props> = ({ data }) => {
  // Transform provinces into dropdown options
  const wilayaOptions = provinces.map((province) => ({
    value: province.number.toString(), // Changed to use province number
    label: province.name,
  }));

  // Sample options for role dropdowns
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "medecin", label: "Medecin" },
  ];

  // State variables to hold dropdown values and selected cities
  const [roleValues, setRoleValues] = useState<string[]>(
    Array(data.length).fill("")
  );
  const [wilayaValues, setWilayaValues] = useState<string[]>(
    Array(data.length).fill("")
  );
  const [selectedCities, setSelectedCities] = useState<
    (CityInterface | null)[][]
  >(Array(data.length).fill(Array(MAX_CITIES_PER_ROW).fill(null)));

  // State variable to track the visibility of the city search for each row
  const [showCitySearch, setShowCitySearch] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  // Toggle city search visibility for a specific row
  const toggleCitySearch = (index: number) => {
    setShowCitySearch((prev) => {
      const newShowCitySearch = [...prev];
      newShowCitySearch[index] = !newShowCitySearch[index];
      return newShowCitySearch;
    });
  };

  // Handlers for dropdown value changes
  const handleRoleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.target;
    setRoleValues((prev) => {
      const newRoleValues = [...prev];
      newRoleValues[index] = value;
      return newRoleValues;
    });
  };

  const handleWilayaChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.target;
    setWilayaValues((prev) => {
      const newWilayaValues = [...prev];
      newWilayaValues[index] = value;
      return newWilayaValues;
    });
    toggleCitySearch(index); // Toggle city search visibility when a wilaya is selected
  };

  // Handle city selection
  const handleCitySelect = (cities: CityInterface[], rowIndex: number) => {
    setSelectedCities((prev) => {
      const newSelectedCities = [...prev];
      const newRowCities = [...newSelectedCities[rowIndex]];

      // Prevent duplicate cities
      const cityToAdd = cities[0]; // Assuming only the first city is selected
      if (!newRowCities.some((city) => city?.id === cityToAdd.id)) {
        const nullIndex = newRowCities.indexOf(null);
        if (nullIndex !== -1) {
          newRowCities[nullIndex] = cityToAdd;
        } else {
          newRowCities.push(cityToAdd); // Add to the end if there are no null values
        }
      }

      newSelectedCities[rowIndex] = newRowCities;
      return newSelectedCities;
    });
  };

  // Handle removing a city
  const handleCityRemove = (rowIndex: number, cityIndex: number) => {
    setSelectedCities((prev) => {
      const newSelectedCities = [...prev];
      newSelectedCities[rowIndex][cityIndex] = null;
      return newSelectedCities;
    });
  };

  // Handle action button click
  const handleActionClick = (rowIndex: number) => {
    // Handle the action click event here
    console.log(`Action clicked for row ${rowIndex}`);
  };

  return (
    <div className="relative rounded-xl overflow-hidden">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left border-b-0 font-medium text-gray-800 text-sm">
              N
            </th>
            <th className="py-2 px-4 text-left border-b-0 font-medium text-gray-800 text-sm">
              Name
            </th>
            <th className="py-2 px-4 text-left border-b-0 font-medium text-gray-800 text-sm">
              Email
            </th>
            <th className="py-2 px-4 text-left border-b-0 font-medium text-gray-800 text-sm">
              Role
            </th>
            <th className="py-2 px-4 text-left border-b-0 font-medium text-gray-800 text-sm">
              Wilaya
            </th>
            <th className="py-2 px-4 text-left border-b-0 font-medium text-gray-800 text-sm">
              Communes
            </th>
            <th className="py-2 px-4 text-center border-b-0 font-medium text-gray-800 text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-4 font-regular text-gray-800 text-sm">
                {rowIndex + 1}
              </td>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-2 px-4 font-regular text-gray-800 text-sm relative"
                >
                  {cellIndex === ROLE_COLUMN_INDEX ? (
                    <DropdownMenu
                      options={roleOptions}
                      value={roleValues[rowIndex]}
                      onChange={(e) => handleRoleChange(e, rowIndex)}
                    />
                  ) : cellIndex === WILAYA_COLUMN_INDEX ? (
                    <DropdownMenu
                      options={wilayaOptions}
                      value={wilayaValues[rowIndex]}
                      onChange={(e) => handleWilayaChange(e, rowIndex)}
                    />
                  ) : cellIndex === COMMUNES_COLUMN_INDEX ? (
                    <div className="relative">
                      <div className="mt-2">
                        {selectedCities[rowIndex]
                          .filter((city) => city !== null)
                          .map((city, cityIndex) => (
                            <span key={cityIndex} className="mr-2">
                              {city!.name}
                              <button
                                className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={() =>
                                  handleCityRemove(rowIndex, cityIndex)
                                }
                              >
                                &#x2715;
                              </button>
                            </span>
                          ))}
                      </div>
                      <button
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-gray-500 rounded-full w-8 h-8 hover:bg-gray-100 focus:outline-none ${
                          selectedCities[rowIndex].some((city) => city !== null)
                            ? "left-auto right-0" // Move the button to the right when communes are selected
                            : ""
                        }`}
                        onClick={() => toggleCitySearch(rowIndex)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="10" cy="10" r="9" />
                          <line x1="10" y1="6" x2="10" y2="14" />
                          <line x1="6" y1="10" x2="14" y2="10" />
                        </svg>
                      </button>
                      {showCitySearch[rowIndex] && (
                        <div className="absolute top-10 left-0 z-10">
                          <CitySearch
                            provinceNumber={
                              wilayaValues[rowIndex]
                                ? parseInt(wilayaValues[rowIndex])
                                : null
                            }
                            onSelect={(city) =>
                              handleCitySelect(city, rowIndex)
                            }
                          />
                        </div>
                      )}
                    </div>
                  ) : cellIndex === ACTION_COLUMN_INDEX ? (
                    <div className="flex justify-center items-center">
                      <button
                        className="font-bold cursor-pointer text-black hover:text-black focus:outline-none text-2xl"
                        onClick={() => handleActionClick(rowIndex)}
                      >
                        ...
                      </button>
                    </div>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;

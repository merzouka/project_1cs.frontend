"use client";
import React, { useState, useRef, useEffect } from "react";
import { cities } from "@/constants/cities";
import { City } from "@/constants/cities";

const CitySearch = ({
  provinceNumber,
  onSelect,
}: {
  provinceNumber: number | null;
  onSelect: (cities: City[]) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<City[]>([]);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handlePositionUpdate = () => {
      if (searchInputRef.current && resultsRef.current) {
        const inputRect = searchInputRef.current.getBoundingClientRect();
        const resultsRect = resultsRef.current.getBoundingClientRect();
        setPosition({
          top: inputRect.bottom - resultsRect.top,
          left: inputRect.left - resultsRect.left,
        });
      }
    };

    window.addEventListener("scroll", handlePositionUpdate);
    window.addEventListener("resize", handlePositionUpdate);
    handlePositionUpdate(); // Update position on initial render

    return () => {
      window.removeEventListener("scroll", handlePositionUpdate);
      window.removeEventListener("resize", handlePositionUpdate);
    };
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredCities = cities.filter(
        (city) =>
          city.name.toLowerCase().includes(value.toLowerCase()) &&
          (provinceNumber === null || city.province === provinceNumber)
      );
      setResults(filteredCities);
    } else {
      setResults([]);
    }
  };

  const handleCityClick = (city: City) => {
    onSelect([city]);
    setResults([]);
    setSearchTerm("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search city..."
        className="border rounded p-2 w-32"
        ref={searchInputRef}
      />
      {results.length > 0 && (
        <ul
          className="border rounded bg-white mt-1 max-h-40 overflow-y-auto absolute z-10 w-32"
          style={{
            left: position.left,
            top: position.top,
          }}
          ref={resultsRef}
        >
          {results.map((city) => (
            <li
              key={city.id}
              onClick={() => handleCityClick(city)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;

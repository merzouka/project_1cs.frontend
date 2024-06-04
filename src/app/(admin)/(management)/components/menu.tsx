"usez client";
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownMenu: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <select
      className="block w-32 py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-400"
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;

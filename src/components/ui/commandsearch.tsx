// components/SearchBox.tsx
"use client"
import React, { useState } from 'react';

interface SearchBoxProps {
  data: string[];
}

const SearchBox: React.FC<SearchBoxProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 absolute md:right-80 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder=" Type a command or search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4">
        {filteredData.map((item, index) => (
          <li key={index} className="py-2 ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;

"use client";
import { StarIcon } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-1 bg-gray-800 p-1 rounded-full w-full max-w-xl shadow-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter Video URL"
          className="w-full px-5 py-3 bg-gray-800 text-white border border-transparent rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-0"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 text-white bg-brand-blue rounded-full shadow-lg  focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? (
            <StarIcon className="animate-spin" />
          ) : (
            <StarIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

// Components/SearchSection/SearchSection.jsx
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const FoodSearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularSearches = [
    "Chicken Biryani",
    "Beef Curry",
    "Dal Tadka",
    "Sushi Platter",
    "Egg Fried",
    "Aloo",
    "Masala",
    "Butter Pudding",
    "Shawarma",
    "Margherita",
  ];

  const handleSearch = (term) => {
    onSearch(term);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="relative">
        {/* Search Container */}
        <div className="flex  items-center justify-between  rounded-full border border-gray-200 overflow-hidden">
          <label htmlFor="" className="input border-none w-full outline-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search products..."
              className="input input-ghost w-full placeholder:text-muted focus:outline-none focus:bg-transparent text-primary text-base "
            />
          </label>

          {/* Search Button */}
          <button
            className="btn btn-primary rounded-l-none rounded-r-full px-5"
            onClick={() => handleSearch(searchTerm)}>
            Search
          </button>
        </div>

        {/* Popular Search Categories */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2 text-center">
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handlePopularSearch(search)}
                className="btn shadow-none text-sm   rounded-full transition-all duration-200 border border-blue-200 hover:shadow-sm hover:border-blue-300">
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSearchSection;

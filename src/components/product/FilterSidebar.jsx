import React, { useState } from 'react';
import categories from './filterCategories.json';

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([45, 1600]);
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile view

  const toggleCategory = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilterChange({ categories: updatedCategories, priceRange });
  };

  const handlePriceChange = (e) => {
    const newRange = [45, Number(e.target.value)];
    setPriceRange(newRange);
    onFilterChange({ categories: selectedCategories, priceRange: newRange });
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg mb-4 w-full shadow-md hover:brightness-105 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      <aside
        className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:block md:w-1/4 w-full 
          bg-gray-100 p-6 rounded-xl shadow-lg 
          sticky top-20 self-start h-[calc(100vh-100px)] 
          overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300
        `}
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Filter Products</h3>

        {/* Category Filter */}
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3 text-gray-700">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 text-gray-700 hover:bg-white hover:shadow-sm p-2 rounded transition"
              >
                <input
                  type="checkbox"
                  className="accent-purple-600 w-4 h-4"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="text-lg font-medium mb-3 text-gray-700">Price Range</h4>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={45}
            max={1600}
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full accent-purple-600"
          />
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;

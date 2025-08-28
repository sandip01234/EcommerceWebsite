import React from 'react';

const ProductsHeader = ({ productCount, onSortChange, sortOrder }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl sm:text-2xl font-semibold">All Products ({productCount})</h1>
      <select
        className="border border-gray-300 rounded px-3 py-1"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option>Relevance</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductsHeader;
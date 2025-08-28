import React from 'react';

const Breadcrumbs = () => {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-800">Home</a> {'>'}<span className="mx-1"></span><span>Products</span>
    </nav>
  );
};

export default Breadcrumbs;
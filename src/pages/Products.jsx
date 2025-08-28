import React, { useState, useEffect, useContext } from 'react';
import Breadcrumb from '/src/components/product/Breadcrumbs.jsx';
import FilterSidebar from '/src/components/product/FilterSidebar';
import ProductsHeader from '/src/components/product/ProductsHeader';
import ProductList from '/src/components/product/ProductList';
import productsData from '/src/components/product/product.json';
import { SearchContext } from '/src/components/SearchContext.jsx'; // ✅ Keep this import

const Products = () => {
  const { debouncedSearchTerm } = useContext(SearchContext); // ✅ use *inside* the component
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState('Relevance');
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [45, 1600],
  });

  const applyFilters = (filters = activeFilters, sort = sortOrder) => {
    let updated = productsData.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.some((cat) =>
          product.name.toLowerCase().includes(cat.toLowerCase())
        );

      const priceMatch =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      const searchMatch = product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      return categoryMatch && priceMatch && searchMatch;
    });

    // Apply sorting
    if (sort === 'Price: Low to High') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sort === 'Price: High to Low') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  };

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    applyFilters(filters, sortOrder);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    applyFilters(activeFilters, order);
  };

  useEffect(() => {
    applyFilters(); // Re-run filters when search changes
  }, [debouncedSearchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <main className="flex-1">
          <ProductsHeader
            productCount={filteredProducts.length}
            onSortChange={handleSortChange}
            sortOrder={sortOrder}
          />
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
};

export default Products;

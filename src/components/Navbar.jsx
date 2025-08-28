import React, { useState, useContext } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import logo from '/public/assets/logo.png';
import { SearchContext } from './SearchContext';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (window.location.pathname !== '/products') {
      navigate('/products');
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium ml-8">
            {['/', '/products', '/about', '/contact'].map((to, i) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-600 hover:text-blue-500 transition-colors'
                }
              >
                {['Home', 'Products', 'About', 'Contact'][i]}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Search Bar */}
    <div className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[400px]">
 <input
            type="text"
            placeholder="Search for appliances..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Cart & Wishlist */}
        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative">
            <FiShoppingCart className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 pt-2 shadow-md border-t border-gray-100">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {['/', '/products', '/about', '/contact'].map((to, i) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-700 hover:text-blue-500 transition-colors'
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {['Home', 'Products', 'About', 'Contact'][i]}
              </NavLink>
            ))}
            {/* Show search bar on mobile */}
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

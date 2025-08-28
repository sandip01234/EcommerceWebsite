import { Routes, Route } from 'react-router-dom';
import React from 'react';
import About from '/src/pages/About.jsx';
import Contact from '/src/pages/Contact.jsx';
import ProductDetail from '/src/pages/ProductDetail';
   // ✅ Importing the ProductDetail component
import Categories from '/src/pages/Categories.jsx';
import Navbar from '/src/components/Navbar.jsx';
import Home from '/src/pages/Home.jsx';
import Products from '/src/pages/Products.jsx';
import { SearchProvider } from '/src/components/SearchContext.jsx';
import { CartProvider } from '/src/components/CartContext.jsx'; //
//  ✅ Importing the cart context
// ✅ Importing the global search context 
import Cart from '/src/pages/Cart.jsx'; // ✅ Importing the Cart page
function App() {
  return (
    <SearchProvider> {/* ✅ Global search context wrapper */}
     <CartProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Product detail route */}
        {/* Add more routes as needed */}
      </Routes>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;

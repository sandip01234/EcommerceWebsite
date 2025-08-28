import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '/src/components/CartContext'; // Adjusted to relative path

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleProductClick(product.id)}
        >
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            {product.badge && (
              <span
                className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full text-white ${
                  product.badge === 'Top Rated' ? 'bg-green-600' : 'bg-blue-600'
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>
          <div className="flex-grow mt-4 flex flex-col">
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
            <div className="mb-4">
              <span className="text-red-600 font-bold text-lg">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-400 ml-2">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <div className="mt-auto space-y-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Placeholder for Buy Now logic (e.g., navigate to checkout)
                }}
                className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '/src/components/CartContext.jsx';
import productsData from '/src/components/product/product.json';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
          <p className="text-gray-700">Error: {this.state.error.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Validate id and parse it with debugging
  const parsedId = id ? parseInt(id, 10) : null;
  const product = productsData.find((p) => p.id === parsedId);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    console.error('Product not found - ID:', id, 'Parsed ID:', parsedId, 'Products Data:', productsData);
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <ErrorBoundary>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/products')}
          className="mb-4 text-blue-600 hover:text-blue-800 transition"
        >
          ← Back to Products
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 text-sm mt-2">{product.brand}</p>
            {product.badge && (
              <span
                className={`mt-2 inline-block text-xs font-semibold px-2 py-1 rounded-full text-white ${
                  product.badge === 'Top Rated' ? 'bg-green-600' : 'bg-blue-600'
                }`}
              >
                {product.badge}
              </span>
            )}
            <div className="mt-4">
              <span className="text-red-600 font-bold text-xl">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-400 ml-2">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Description</h2>
              <p className="mt-2 text-gray-700">
                {product.description || 'This smart refrigerator offers advanced cooling efficiency with a touchscreen display and built-in icemaker. Perfect for modern homes with its spacious capacity and water dispenser.'}
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Capacity: Not specified</li>
                <li>Touchscreen Display: Yes</li>
                <li>Icemaker: Yes</li>
                <li>Water Dispenser: Yes</li>
                <li>Cooling Efficiency: Energy Certified</li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <button
                  onClick={handleDecreaseQuantity}
                  className="bg-gray-200 text-gray-700 rounded px-3 py-1 hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="mx-4 text-gray-700">{quantity}</span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="bg-gray-200 text-gray-700 rounded px-3 py-1 hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
              <p className="mt-2 text-gray-900 font-semibold">Total Price: ${totalPrice}</p>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => addToCart({ ...product, quantity })}
                  className="w-32 bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-32 bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductDetail;
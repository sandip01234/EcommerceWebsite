import React, { useContext } from 'react';
import { CartContext } from '/src/components/CartContext.jsx';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <button
            onClick={clearCart}
            className="mb-4 text-sm text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded"
          >
            Clear Cart
          </button>
          <div className="grid gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Quantity:
                      <span className="ml-2 font-semibold">{item.quantity}</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Added on: {new Date(item.dateAdded).toLocaleString()}
                    </p>
                    <p className="text-red-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <div className="flex gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-white bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-sm"
                    >
                      −
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="text-white bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

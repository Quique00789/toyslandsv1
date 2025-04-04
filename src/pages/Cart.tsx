import React from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center" data-aos="fade-down">
          Shopping Cart
        </h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="backdrop-blur-md bg-white/80 rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all"
                  data-aos="fade-up"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-blue-600 hover:text-blue-800 px-2 py-1"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-blue-600 hover:text-blue-800 px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div
                className="backdrop-blur-md bg-white/80 rounded-xl p-6 sticky top-20"
                data-aos="fade-left"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-full font-bold hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="text-center py-12"
            data-aos="fade-up"
          >
            <ShoppingBag className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-4">Add some awesome toys to your cart!</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500  text-white px-8 py-3 rounded-full font-bold hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
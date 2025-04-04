import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { items, removeItem } = useWishlistStore();
  const addToCart = useCartStore(state => state.addItem);

  const handleAddToCart = (item: any) => {
    addToCart({
      ...item,
      quantity: 1
    });
    removeItem(item.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center" data-aos="fade-down">
          My Wishlist
        </h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="backdrop-blur-md bg-white/80 rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
                data-aos="fade-up"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-red-600">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Heart className="h-5 w-5 fill-current" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">${item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:from-pink-500 hover:to-red-500 transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-12"
            data-aos="fade-up"
          >
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-600 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-4">Save your favorite toys to your wishlist!</p>
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-pink-500 hover:to-red-500 transition-all transform hover:scale-105">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
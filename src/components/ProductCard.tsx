import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const addToCart = useCartStore(state => state.addItem);
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category
    });
  };

  return (
    <div
      className="backdrop-blur-md bg-white/80 rounded-2xl overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
      data-aos="fade-up"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-blue-600">{product.name}</h3>
          <button
            onClick={handleWishlistToggle}
            className={`${isWishlisted ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors`}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            {variant === 'featured' ? (
              <>
                <span className="text-xl font-bold text-blue-600 mr-2">
                  ${(product as any).discountedPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-blue-600">
                ${product.price}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
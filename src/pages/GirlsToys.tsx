import React from 'react';
import { getProductsBySection } from '../data/products';
import ProductCard from '../components/ProductCard';

const GirlsToys = () => {
  const products = getProductsBySection('girls');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center" data-aos="fade-down">
          Juguetes para Niñas
        </h1>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-4" data-aos="fade-up">
          {["Todos", "Playsets", "Arts & Crafts", "Plush Toys", "Educational"].map((category) => (
            <button
              key={category}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GirlsToys;
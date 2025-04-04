import React from 'react';
import { getProductsBySection } from '../data/products';
import ProductCard from '../components/ProductCard';

const BoysToys = () => {
  const products = getProductsBySection('boys');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center" data-aos="fade-down">
          Juguetes para Niños
        </h1>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-4" data-aos="fade-up">
          {["Todos", "Robots", "Action Figures", "Construction", "Science"].map((category) => (
            <button
              key={category}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full font-semibold hover:from-green-500 hover:to-blue-500 transition-all whitespace-nowrap"
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

export default BoysToys;
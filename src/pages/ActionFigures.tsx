import React from 'react';
import { getProductsBySection } from '../data/products';
import ProductCard from '../components/ProductCard';

const ActionFigures = () => {
  const products = getProductsBySection('figures');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center" data-aos="fade-down">
          Figuras de Acción
        </h1>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-4" data-aos="fade-up">
          {["Todos", "Superheroes", "Sci-Fi", "Adventure", "Fantasy"].map((category) => (
            <button
              key={category}
              className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-red-500 hover:to-purple-500 transition-all whitespace-nowrap"
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

export default ActionFigures;
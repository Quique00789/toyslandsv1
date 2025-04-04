import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { searchProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(searchProducts(''));

  useEffect(() => {
    const results = searchProducts(searchQuery);
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8" data-aos="fade-down">
          <div className="flex items-center gap-4 backdrop-blur-md bg-white/80 rounded-full p-2 border border-blue-200">
            <SearchIcon className="h-6 w-6 text-blue-500 ml-4" />
            <input
              type="text"
              placeholder="Search for toys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4" data-aos="fade-up">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-500 hover:to-blue-500 transition-all">
            All Categories
          </button>
          {["Robots", "Playsets", "Action Figures", "Educational"].map((category) => (
            <button
              key={category}
              className="bg-white/80 backdrop-blur-md text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
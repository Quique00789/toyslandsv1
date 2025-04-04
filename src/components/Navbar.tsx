import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Search, Menu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = React.useState(0);
  const [wishlistCount, setWishlistCount] = React.useState(0);

  const navItems = [
    { 
      name: "Niñas",
      path: "/ninas"
    },
    {
      name: "Niños",
      path: "/ninos"
    },
    {
      name: "Figuras",
      path: "/figuras"
    }
  ];

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-blue-600/90 to-red-500/90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold hover:text-white/90 transition-colors">
              ToysLands
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.path}
                  className={`relative group overflow-hidden rounded-lg ${
                    location.pathname === item.path ? 'bg-white/20' : ''
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <span className="relative z-10 px-4 py-2 text-white/90 font-semibold hover:text-white transition-colors">
                    {item.name}
                  </span>
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-white/50">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/search" className="relative group">
              <Search className="h-6 w-6 text-white/90 cursor-pointer group-hover:text-white transition-colors" />
            </Link>
            <Link to="/wishlist" className="relative group">
              <Heart className="h-6 w-6 text-white/90 cursor-pointer group-hover:text-white transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6 text-white/90 cursor-pointer group-hover:text-white transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Menu className="h-6 w-6 md:hidden text-white/90 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GirlsToys from './pages/GirlsToys';
import BoysToys from './pages/BoysToys';
import ActionFigures from './pages/ActionFigures';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';

// Static pages
const StaticPage = ({ title, content }: { title: string; content: string }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">{title}</h1>
      <div className="prose prose-lg mx-auto">
        <p>{content}</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ninas" element={<GirlsToys />} />
          <Route path="/ninos" element={<BoysToys />} />
          <Route path="/figuras" element={<ActionFigures />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />
          <Route 
            path="/faq" 
            element={
              <StaticPage 
                title="Preguntas Frecuentes" 
                content="Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros productos y servicios." 
              />
            } 
          />
          <Route 
            path="/returns" 
            element={
              <StaticPage 
                title="Política de Devoluciones" 
                content="Nuestra política de devoluciones está diseñada para garantizar tu satisfacción con cada compra." 
              />
            } 
          />
          <Route 
            path="/terms" 
            element={
              <StaticPage 
                title="Términos y Condiciones" 
                content="Lee nuestros términos y condiciones para entender mejor tus derechos y responsabilidades." 
              />
            } 
          />
          <Route 
            path="/privacy" 
            element={
              <StaticPage 
                title="Política de Privacidad" 
                content="Tu privacidad es importante para nosotros. Conoce cómo protegemos y manejamos tu información." 
              />
            } 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/toyslands',
      twitter: 'https://twitter.com/toyslands',
      instagram: 'https://instagram.com/toyslands',
      youtube: 'https://youtube.com/toyslands'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@toyslands.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Av.+Juguetes+123,+Ciudad+Diversión', '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600/90 to-red-500/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ToysLands</h3>
            <p className="text-white/80 mb-4">
              Donde la diversión cobra vida. Ofrecemos los mejores juguetes para niños y niñas de todas las edades.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('youtube')}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/ninas" className="text-white/80 hover:text-white transition-colors">Juguetes para Niñas</Link>
              </li>
              <li>
                <Link to="/ninos" className="text-white/80 hover:text-white transition-colors">Juguetes para Niños</Link>
              </li>
              <li>
                <Link to="/figuras" className="text-white/80 hover:text-white transition-colors">Figuras de Acción</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicio al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white transition-colors">Política de Devoluciones</Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Política de Privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleLocationClick}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors w-full text-left"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Av. Juguetes 123, Ciudad Diversión</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors w-full text-left"
                >
                  <Phone className="h-5 w-5" />
                  <span>+123 456 7890</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors w-full text-left"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@toyslands.com</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ToysLands. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products, featuredProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const awesomeToysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToAwesomeToys = () => {
    awesomeToysRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-red-500 py-20 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-red-500/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to ToysLands
            </h1>
            <p className="text-xl mb-8 text-white/90">Where Fun Comes to Life!</p>
            <button 
              onClick={scrollToAwesomeToys}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Playing Now!
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div ref={awesomeToysRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center" data-aos="fade-up">
          Awesome Toys!
        </h2>
        <div data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Featured Products with Discounts */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center" data-aos="fade-up">
            Ofertas Especiales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
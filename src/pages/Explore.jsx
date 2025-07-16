import React, { useEffect } from 'react';
import { carModels } from '../data/carModels';
import CarModelCard from '../components/CarModelCard';
import { useLocation } from 'react-router-dom';

const Explore = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({block: 'start'});
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-35 ">
      <h1 className="text-4xl font-bold mb-10 text-center">Explore Vehicles</h1>
      {carModels.map(({ category, models }) => (
        <section key={category} id={category.toLowerCase()} className="mb-16 scroll-mt-24">
          <div className="flex items-center mb-6 max-w-6xl">
            <h2 className="text-2xl font-semibold mr-4">{category}s <span className='text-gray-400 text-sm'>Vehicles</span></h2>
            <div className="flex-1 border-t border-gray-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            {models.map((model, idx) => (
              <CarModelCard key={model.name + idx} {...model} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Explore; 
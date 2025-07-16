import React from 'react';

const CarModelCard = ({ name, image }) => (
  <div className="flex flex-col items-center mb-6">
    <img src={image} alt={name} className="w-80 h-auto object-cover mb-2 transition-all hover:transform hover:scale-98" draggable={false} />
    <span className="text-center text-black font-medium text-xl underline">{name}</span>
  </div>
);

export default CarModelCard; 
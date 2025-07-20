import React from "react";

const SpotlightFeatureCard = ({ image, alt, description }) => {
    return (
        <div className="rounded-2xl p-4 flex flex-col items-center text-center">
            <img src={image}  alt={alt} loading="lazy" className="rounded-xl mb-4 object-cover h-[400px] w-full transition-all hover:transform hover:scale-99" draggable={false}/>
            <p className="text-black font-medium text-base">{description}</p>
        </div>
    );
};

export default SpotlightFeatureCard; 
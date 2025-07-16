import React from "react";
import { useNavigate } from "react-router-dom";

const VehicleCard = ({ title, image, buttonText }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        const section = title.toLowerCase();
        navigate(`/explore#${section}`);
    };
    return (
        <div className="bg-[#1C1C1C] relative rounded-2xl p-8 flex flex-col justify-between h-[270px] overflow-hidden transition-all hover:bg-gray-800 hover:transform hover:scale-99">
            <div className="z-10 relative">
                <h3 className="text-white text-3xl font-extrabold mb-6">{title} <span className="text-sm font-medium text-[#717171]">Vehicles</span> </h3>
                <button onClick={handleClick} className="bg-black cursor-pointer text-white rounded-full px-7 py-2 text-lg font-medium shadow-md mb-6 group hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all">
                    <span className="group-hover:text-black text-base flex items-center justify-center">
                        {buttonText}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
            </div>
            <img
                src={image}
                alt={title}
                className="absolute bottom-0 right-[-30%] h-[180px] w-auto object-contain select-none z-0"
                style={{ minWidth: '260px', maxWidth: 'none' }}
                draggable={false}
            />
        </div>
    );
};

export default VehicleCard; 
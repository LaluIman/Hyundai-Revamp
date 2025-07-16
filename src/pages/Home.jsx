import React from "react";
import whiteCar from "../assets/White.webp";
import VehicleCard from "../components/VehicleCard";
import SUV from "../assets/SUV.webp";
import EV from "../assets/EV.webp";
import MVP from "../assets/MVP.webp";
import Charging from "../assets/Charging.webp";
import Dirt from "../assets/dirt.webp";
import SpotlightFeatureCard from "../components/SpotlightFeatureCard";
import Cloud_right from "../assets/Cloud-right.webp";
import Cloud_left from "../assets/Cloud-left.webp";
import F1 from "../assets/Feature1.webp"
import F2 from "../assets/Feature2.webp"
import F3 from "../assets/Feature3.webp"
import F4 from "../assets/Feature4.webp"
import cityBg from "../assets/city.webp";
import road from "../assets/road.webp";

const Home = () => {
    return (
        <>
            {/* Hero */}
            <section className="relative w-full h-[600px] md:h-[700px] flex flex-col justify-end items-center overflow-hidden p-0">
                <img src={cityBg} key={cityBg} loading="lazy" role="presentation" decoding="async" fetchPriority="high" alt="City Background" className="absolute inset-0 w-full h-full object-cover z-0 select-none" draggable={false} />
                <img src={road} alt="Road" className="absolute bottom-0 left-0 w-full object-cover z-10 select-none h-[150px] md:h-[125px] object-bottom" draggable={false} />
                <div className="absolute top-50 left-0 w-full flex flex-col items-center z-20 px-4">
                    <p className="text-green-600 font-medium text-sm flex justify-center items-center gap-2">
                        <span>Latest releases</span>
                        <span className="w-2 h-2 rounded-full bg-green-500 relative">
                            <span className="absolute inset-0 rounded-full bg-green-500 opacity-80 animate-ping"></span>
                        </span>
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-black">The new CRETA</h1>
                    <p className="text-lg md:text-xl mt-2 font-medium text-black">Be Unstoppable.</p>
                </div>
                <img src={whiteCar} alt="White Car" className="relative z-20 object-contain select-none mb-[-100px] md:mb-[5px]" style={{height:'400px'}} draggable={false} />
            </section>
            {/* Explore */}
            <section className="bg-black py-15">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-white text-4xl font-semibold text-center mb-12">Explore Vehicles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <VehicleCard
                            title="SUV"
                            image={SUV}
                            buttonText="See more"
                        />
                        <VehicleCard
                            title="EV"
                            image={EV}
                            buttonText="See more"
                        />
                        <VehicleCard
                            title="MPV"
                            image={MVP}
                            buttonText="See more"
                        />
                    </div>
                </div>
            </section>
            {/* Feature */}
            <section className="pt-16 pb-16 md:pb-0 bg-[#AABFD9]">
                <div className="relative">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">Spotlight in motion</h2>
                        <p className="text-black/90 text-base md:text-lg mb-10 max-w-2xl">Designed for you who are always observant in seeing the best side of every challenge. Be ready to face change, be quick to adjust your steps. It’s time to turn on your light and shine. Be the spotlight on your journey to the future.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            <SpotlightFeatureCard
                                image={F1}
                                alt="Seat"
                                description="Comfortable seat in every model in Hyundai factory, making trip more fun."
                            />
                            <SpotlightFeatureCard
                                image={F2}
                                alt="Storage"
                                description="Baggage storage that fit every needs in any occasion, making easy travel everywhere."
                            />
                            <SpotlightFeatureCard
                                image={F3}
                                alt="Gearshift"
                                description="By adjusting the right/left wheel slip control according to engine torque and gearshift pattern."
                            />
                            <SpotlightFeatureCard
                                image={F4}
                                alt="Cornering"
                                description="Reduces understeer through brake control settings when the vehicle is cornering."
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-none mt-30 relative z-10">
                        <img src={Charging} alt="Car Charging" className="object-cover w-full hidden md:block" draggable={false} />
                        <div className="absolute top-110 left-10 hidden md:block p-5 bg-black/20 rounded-2xl">
                            <h1 className="text-3xl font-bold text-white mb-5">EV batteries that go the extra mile</h1>
                            <p className="text-white text-sm max-w-3xl">When you think of sudden internet stars, an EV battery is probably not the first thing that comes to mind. Yet, this was the case for one robust IONIQ 5 battery and its delighted owner, who clocked over 660,000 kilometers (410,000 miles) in just under three years without a single major issue! This remarkable achievement was shared in an online automotive forum, which set the story in motion. We took a closer look.</p>
                        </div>
                        <div className="relative w-full hidden md:block h-auto">
                            <img src={Dirt} alt="Ground" className="object-cover w-full h-70 object-top"draggable={false} />
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: "linear-gradient(to top, #000 0%, rgba(170,191,217,0.0) 60%)",
                                    zIndex: 2,
                                }}
                            />
                        </div>
                    </div>
                    <img
                        src={Cloud_right}
                        className="w-100 h-auto absolute top-[25%] right-0 mx-auto bottom-0 z-0"
                        alt="Cloud"
                        draggable={false}
                    />
                    <img
                        src={Cloud_right}
                        className="w-70 h-auto absolute top-[0%] right-0 mx-auto bottom-0 z-0"
                        alt="Cloud"
                        draggable={false}
                    />
                    <img
                        src={Cloud_left}
                        className="w-100 h-auto absolute top-[20%] mx-auto bottom-[-20%] z-0"
                        alt="Cloud"
                        draggable={false}
                    /> <img
                        src={Cloud_left}
                        className="w-70 h-auto absolute top-[0%] mx-auto bottom-0 z-0"
                        alt="Cloud"
                        draggable={false}
                    />
                </div>
            </section>
        </>
    );
};

export default Home;

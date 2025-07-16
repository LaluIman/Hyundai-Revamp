import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.webp";
import car from "../assets/Car_icon.webp";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
                setDropdown(null);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dropdownContents = {
        Vehicles: (
            <ul className="space-y-2">
                <li className="hover:text-black cursor-pointer">EV</li>
                <li className="hover:text-black cursor-pointer">SUV</li>
                <li className="hover:text-black cursor-pointer">MVP</li>
                <li className="hover:text-black cursor-pointer">Cars</li>
            </ul>
        ),
        "Shop now": (
            <ul className="space-y-2">
                <li className="hover:text-black cursor-pointer">Find a Dealer</li>
                <li className="hover:text-black cursor-pointer">Special Offers</li>
            </ul>
        ),
        Ownership: (
            <ul className="space-y-2">
                <li className="hover:text-black cursor-pointer">Service</li>
                <li className="hover:text-black cursor-pointer">Warranty</li>
                <li className="hover:text-black cursor-pointer">Care</li>
            </ul>
        ),
        More: (
            <ul className="space-y-2">
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">Contact</li>
                <li className="hover:text-black cursor-pointer">Career</li>
                <li className="hover:text-black cursor-pointer">Blog</li>
            </ul>
        ),
    };

    return (
        <>
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl md:rounded-full border border-gray-300 w-[90%] md:w-fit md:min-w-[800px] px-6 md:px-10 py-3 flex items-center justify-between md:max-w-6xl">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-5">
                    <img src={logo} alt="Logo" className="h-7 w-auto" draggable={false}/>
                </a>

                {/* Middle Menu (Desktop) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
                    {Object.keys(dropdownContents).map((item) => (
                        <div key={item} className="relative">
                            <button
                                onClick={() => toggleDropdown(item)}
                                className="hover:text-black flex items-center gap-1 transition"
                            >
                                {item}
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {dropdown === item && (
                                <div className="absolute top-10 left-[-50%] bg-white text-sm border border-gray-200 rounded-lg p-4 w-40 shadow-md z-50">
                                    {dropdownContents[item]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Test Drive (Desktop) */}
                <div className="hidden md:flex">
                    <a
                        href="#test-drive"
                        className="bg-black text-white flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                    >
                        <img src={car} alt="Car Icon" className="w-4" />
                        Test drive
                    </a>
                </div>

                {/* Hamburger Toggle (Mobile only) */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-white border border-gray-300 rounded-2xl p-6 w-[90%] max-w-sm shadow-lg md:hidden">
                    <ul className="space-y-4 text-sm font-medium text-gray-700">
                        {Object.entries(dropdownContents).map(([label, content]) => (
                            <li key={label}>
                                <button
                                    onClick={() => toggleDropdown(label)}
                                    className="w-full text-left flex justify-between items-center hover:text-black"
                                >
                                    {label}
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {dropdown === label && (
                                    <div className="mt-2 ml-2 pl-2 border-l border-gray-300 text-sm">
                                        {content}
                                    </div>
                                )}
                            </li>
                        ))}
                        <li>
                            <a
                                href="#test-drive"
                                className="mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
                            >
                                <img src={car} alt="Car Icon" className="w-4" />
                                Test drive
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;

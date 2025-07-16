import React from "react";
import Logo from "../assets/whiteLogo.webp";

const Footer = () => {
    return (
        <footer class="bg-black text-white pt-16 pb-8 px-6 md:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
                <div class="md:col-span-4 lg:col-span-6 max-w-md">
                    <img src={Logo} className="h-20" alt="Hyundai" draggable={false}/>
                    <h3 class="text-xl font-normal mb-6 leading-tight">Keep up to date with our quarterly newsletter,
                        "You've got mail."</h3>
                    <div class="mt-4 space-y-4">
                        <input type="email" placeholder="Enter email address..." class="newsletter-input w-full px-4 py-3 bg-zinc-900 rounded text-white border border-zinc-800 focus:outline-none focus:border-zinc-700" />
                        <button class="bg-white text-black px-6 py-2.5 rounded-full flex items-center font-medium hover:bg-gray-800 transition-all hover:text-white">
                            Subscribe
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hidden md:block md:col-span-1 lg:hidden"></div>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
                    <div>
                        <h3 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">Vehicles</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">SUVs</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">EVs</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">MPVs</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Cars</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">See More</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">About</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Ownership</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Services</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Insurance</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Warranty</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Careers</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div class="sm:col-span-2 md:col-span-1 lg:col-span-1">
                        <h3 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">Follow Us</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Instagram</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">LinkedIn</a></li>
                            <li><a href="#" class="text-sm hover:text-gray-300 transition-colors">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-16 pt-6 border-t border-zinc-800">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="flex space-x-6 mb-4 md:mb-0">
                        <a href="#" class="text-xs text-gray-500 hover:text-gray-300">Sitemap</a>
                        <a href="#" class="text-xs text-gray-500 hover:text-gray-300">Privacy Policy</a>
                    </div>
                    <div class="text-xs text-gray-500">
                        © 2025, Not Hyundai. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
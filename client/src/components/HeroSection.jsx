import React from 'react';
import { SearchIcon } from '../assets/icons';

const HeroSection = () => (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-purple-500/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2)_0%,_rgba(0,0,0,0)_50%)]"></div>

        <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Find your perfect <span className="text-purple-400">learning partner</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Discover, connect, and learn with people worldwide. Master any skill, one connection at a time.
            </p>
            <div className="mt-8 flex justify-center">
                <div className="w-full max-w-md bg-gray-800/50 border border-gray-700 rounded-full flex items-center p-2 backdrop-blur-sm shadow-2xl shadow-purple-900/50">
                    <input
                        type="text"
                        placeholder='Try "Drawing"'
                        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none px-4"
                    />
                    <button className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-full hover:scale-105 transform transition-transform duration-300">
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;


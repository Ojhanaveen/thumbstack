import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 py-5 bg-primary z-[1000] shadow-md"
        >
            <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="flex text-2xl font-bold font-heading tracking-tight">
                        <span className="text-[#3B82F6]">Flow</span>
                        <span className="text-[#10B981]">Automate</span>
                        <span className="text-[#F59E0B] ml-2">AI</span>
                    </div>
                </div>
                <ul className="hidden lg:flex justify-center gap-8 list-none m-0 p-0">
                    <li><a href="#services" className="text-sm font-medium text-white opacity-90 hover:opacity-100 hover:text-accent-alt transition-colors">Services</a></li>
                    <li><a href="#process" className="text-sm font-medium text-white opacity-90 hover:opacity-100 hover:text-accent-alt transition-colors">How it Works</a></li>
                    <li><a href="#about" className="text-sm font-medium text-white opacity-90 hover:opacity-100 hover:text-accent-alt transition-colors">About Us</a></li>
                    <li><a href="#contact" className="text-sm font-medium text-white opacity-90 hover:opacity-100 hover:text-accent-alt transition-colors">Contact</a></li>
                </ul>
                <div className="hidden lg:flex">
                    <a href="#contact" className="bg-accent text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-red-800 transition-colors">
                        Get Started
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button className="text-white p-2">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

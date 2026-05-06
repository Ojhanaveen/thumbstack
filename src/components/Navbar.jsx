import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 py-[30px] bg-primary z-[1000] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
            <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
                <div>
                    <span className="font-bold text-xl tracking-tight text-black">APURA</span>
                </div>
                <ul className="hidden lg:flex justify-center gap-10 list-none m-0 p-0">
                    <li><a href="#products" className="flex items-center gap-1 text-sm font-medium text-text-main opacity-80 hover:opacity-100 hover:text-primary-dark">Products <ChevronDown size={14} /></a></li>
                    <li><a href="#roadmap" className="flex items-center gap-1 text-sm font-medium text-text-main opacity-80 hover:opacity-100 hover:text-primary-dark">Road map <ChevronDown size={14} /></a></li>
                    <li><a href="#mission" className="text-sm font-medium text-text-main opacity-80 hover:opacity-100 hover:text-primary-dark">Our mission</a></li>
                    <li><a href="#devs" className="text-sm font-medium text-text-main opacity-80 hover:opacity-100 hover:text-primary-dark">For devs</a></li>
                    <li><a href="#contact" className="text-sm font-medium text-text-main opacity-80 hover:opacity-100 hover:text-primary-dark">Contact us</a></li>
                </ul>
                <div className="flex justify-end">
                    <button className="flex lg:hidden flex-col gap-1.5">
                        <span className="w-6 h-0.5 bg-text-main rounded-sm"></span>
                        <span className="w-6 h-0.5 bg-text-main rounded-sm"></span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

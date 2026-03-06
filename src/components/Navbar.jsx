import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="navbar"
        >
            <div className="container nav-content">
                <div className="logo">
                    <span className="logo-text">APURA</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#products">Products <ChevronDown size={14} /></a></li>
                    <li><a href="#roadmap">Road map <ChevronDown size={14} /></a></li>
                    <li><a href="#mission">Our mission</a></li>
                    <li><a href="#devs">For devs</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
                <div className="nav-actions">

                    <button className="mobile-menu-btn">
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

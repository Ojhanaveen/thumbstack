import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content"
                >
                    <h1 className="hero-title">By Europeans, for Europeans</h1>
                    <p className="hero-subtitle">
                        Privacy and security that europeans need, demand and expect. Without giving other nations control over our our data.
                    </p>
                </motion.div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-line"></div>
                        <span className="stat-value">No interference</span>
                        <span className="stat-label">No third-party interference</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-line"></div>
                        <span className="stat-value">1st cloud platform</span>
                        <span className="stat-label">To allow data control and ownership</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-line"></div>
                        <span className="stat-value">1st cloud infrastructure</span>
                        <span className="stat-label">To provide transparency over your data streams</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-line"></div>
                        <span className="stat-value">Dynamic infrastructure</span>
                        <span className="stat-label">Cloud, hybrid, or on-prem form</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

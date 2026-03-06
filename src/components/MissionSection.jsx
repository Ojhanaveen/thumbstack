import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import './MissionSection.css';

const MissionSection = () => {
    return (
        <section className="mission-section">
            <div className="container">
                <div className="mission-card">
                    <div className="mission-content">
                        <span className="mission-tag">About us</span>
                        <h2 className="mission-title">By Europeans, <br />for Europeans</h2>
                        <p className="mission-desc">
                            Our vision is to empower governments, organizations and individuals with control and independence in the online realm.
                        </p>
                        <button className="read-more-btn">
                            Read more about us <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="mission-visual">
                        <div className="europe-visual-wrapper">
                            <div className="europe-map-bg">
                                <img src="/europe-map-visual.png" alt="Europe Map" className="europe-map-image" />
                            </div>
                            <div className="stars-circle-overlay">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={`star star-${i + 1}`}>★</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;

import React from 'react';
import { motion } from 'framer-motion';
import './JoinSection.css';

const JoinSection = () => {
    return (
        <section className="join-section">
            <div className="container join-container">
                <h2 className="join-title">Join the future of data sovereignty</h2>
                <div className="join-input-group">
                    <input type="email" placeholder="Enter your email" className="join-input" />
                    <button className="join-submit-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;

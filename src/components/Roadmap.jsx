import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Roadmap.css';

const stages = [
    {
        stage: "Stage 1",
        title: "Cloud infrastructure",
        description: "",
        buttonText: "Book a demo",
        isCurrent: false
    },
    {
        stage: "Stage 2",
        title: "Collaboration",
        description: "It's alternative to GoogleWorkspaces/Teams, Slack etc.",
        buttonText: "Try it",
        isCurrent: true
    },
    {
        stage: "Stage 3",
        title: "Communication",
        description: "Apura will run its own service allowing customers to develop applications on our secure and sovereign cloud based platform.",
        buttonText: "Testing now",
        isCurrent: false,
        isComingSoon: true
    },
    {
        stage: "Stage 4",
        title: "Connectivity",
        description: "It's alternative to LineIn, Instagram.",
        buttonText: "Coming soon",
        isCurrent: false,
        isComingSoon: true
    },
    {
        stage: "Stage 5",
        title: "Entertainment",
        description: "It's alternative to Youtube/TikTok.",
        buttonText: "Coming soon",
        isCurrent: false,
        isComingSoon: true
    }
];

const Roadmap = () => {
    return (
        <section className="roadmap-section" id="roadmap">
            <div className="container">
                <h2 className="roadmap-heading">Our Road to Creating Data Ownership and Security</h2>

                <div className="stages-list">
                    {stages.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`stage-item ${item.isCurrent ? 'active' : ''}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="stage-left">
                                <span className="stage-number">{item.stage}</span>
                                <h3 className="stage-title">{item.title}</h3>
                            </div>
                            <div className="stage-center">
                                {item.description && <p className="stage-desc">{item.description}</p>}
                            </div>
                            <div className="stage-right">
                                <div className="stage-action-row">
                                    <button className={`stage-btn ${item.isCurrent ? 'btn-active' : ''} ${item.isComingSoon ? 'btn-faded' : ''}`}>
                                        {item.buttonText}
                                    </button>
                                    <ArrowRight size={18} className="arrow-icon" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Consult & Strategy",
        description: "We analyze your current operations, identify bottlenecks, and craft a comprehensive digital transformation roadmap.",
        color: "bg-blue-600"
    },
    {
        num: "02",
        title: "Build & Automate",
        description: "Our engineers implement cutting-edge AI models, robust cloud infrastructure, and streamlined workflows.",
        color: "bg-accent-alt"
    },
    {
        num: "03",
        title: "Scale & Evolve",
        description: "We provide ongoing support, continuous optimization, and scale the solutions as your business grows.",
        color: "bg-green-600"
    }
];

const Roadmap = () => {
    return (
        <section className="py-[120px] bg-primary text-white" id="process">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-16">
                    <span className="text-accent-alt text-sm font-bold tracking-widest uppercase mb-3 block">Our Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
                    <p className="text-gray-300 text-lg max-w-[600px] mx-auto">A streamlined approach to transforming your business with technology.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-white/20 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative z-10 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-lg ${step.color} border-4 border-primary`}>
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;

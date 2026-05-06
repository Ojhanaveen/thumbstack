import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const MissionSection = () => {
    return (
        <section className="py-[100px] bg-white" id="about">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team working" className="rounded-2xl shadow-xl relative z-10 w-full h-[500px] object-cover" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            Empowering Your Business Through Technology
                        </h2>
                        <p className="text-lg text-text-muted mb-8 leading-relaxed">
                            At FlowAutomate AI, we believe that technology should be an enabler, not a bottleneck. We partner with forward-thinking organizations to optimize their operations, automate repetitive tasks, and evolve their business models for the digital age.
                        </p>

                        <div className="flex flex-col gap-5 mb-10">
                            {[
                                "Expert team with deep industry knowledge",
                                "Tailored solutions for your specific needs",
                                "Focus on scalable and secure architecture",
                                "Commitment to long-term client success"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                                    <span className="text-primary font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primary-dark transition-colors inline-block">
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;

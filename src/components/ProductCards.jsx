import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Database, LineChart, ShieldCheck } from 'lucide-react';

const services = [
    {
        title: "AI & Machine Learning",
        description: "Custom AI models, predictive analytics, and natural language processing to unlock new business capabilities.",
        icon: <Brain className="w-8 h-8 text-blue-600" />
    },
    {
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and resilient cloud architecture design and seamless migration services.",
        icon: <Cloud className="w-8 h-8 text-blue-600" />
    },
    {
        title: "DevOps & Automation",
        description: "Streamline your development lifecycle with CI/CD pipelines, containerization, and IaC.",
        icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
        title: "Web & App Development",
        description: "High-performance, responsive web and mobile applications built with modern frameworks.",
        icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
        title: "Data Analytics & BI",
        description: "Transform raw data into actionable insights with interactive dashboards and reporting.",
        icon: <LineChart className="w-8 h-8 text-blue-600" />
    },
    {
        title: "IT Strategy Consulting",
        description: "Expert guidance on digital transformation, technology stack selection, and IT roadmaps.",
        icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    }
];

const ProductCards = () => {
    return (
        <section className="py-[100px] bg-bg-light" id="services">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-[60px] max-w-[700px] mx-auto">
                    <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Comprehensive Technical Services</h3>
                    <p className="text-text-muted text-lg">We provide end-to-end consultancy and implementation to solve your most complex technical challenges.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 rounded-xl"
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                            <p className="text-text-muted leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;

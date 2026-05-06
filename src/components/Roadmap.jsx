import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        <section className="py-[120px]" id="roadmap">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-5xl max-w-[600px] mb-20 leading-[1.05] font-semibold text-center mx-auto tracking-[-0.02em]">
                    Our Road to Creating Data Ownership and Security
                </h2>

                <div className="flex flex-col">
                    {stages.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`grid grid-cols-[320px_1fr_200px] items-center py-10 border-b border-black/10 transition-all duration-300 ease-in-out max-[1100px]:grid-cols-1 max-[1100px]:gap-5 max-[1100px]:py-[30px] max-[1100px]:px-5 ${
                                item.isCurrent
                                    ? 'bg-primary -mx-10 px-10 rounded-2xl border-b-0'
                                    : ''
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-[60px] max-[1100px]:gap-[30px]">
                                <span className="text-sm font-medium opacity-60">{item.stage}</span>
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                            </div>
                            <div className="pr-[60px] max-[1100px]:pr-0">
                                {item.description && <p className="text-sm opacity-60 max-w-[480px] leading-normal">{item.description}</p>}
                            </div>
                            <div className="flex justify-end max-[1100px]:justify-start">
                                <div className="flex items-center gap-5">
                                    <button className={`text-[13px] font-semibold py-2 px-6 rounded-lg cursor-pointer ${
                                        item.isCurrent
                                            ? 'bg-white border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                                            : item.isComingSoon
                                                ? 'opacity-40 bg-transparent border-none'
                                                : 'bg-white border border-black/10'
                                    }`}>
                                        {item.buttonText}
                                    </button>
                                    <ArrowRight size={18} className="opacity-40" />
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

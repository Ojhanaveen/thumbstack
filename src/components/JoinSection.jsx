import React from 'react';
import { motion } from 'framer-motion';

const JoinSection = () => {
    return (
        <section className="py-10 border-b border-black/5">
            <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center gap-6 max-md:flex-col max-md:items-start">
                <h2 className="text-2xl font-medium opacity-80">Join the future of data sovereignty</h2>
                <div className="flex items-center border-b-2 border-text-main py-2 w-full max-w-[400px]">
                    <input type="email" placeholder="Enter your email" className="border-none bg-transparent w-full text-base outline-none font-[inherit]" />
                    <button className="p-1 flex items-center justify-center opacity-60 hover:opacity-100">
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

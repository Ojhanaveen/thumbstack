import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MissionSection = () => {
    return (
        <section className="py-[120px]">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="bg-[#1e1e1e] rounded-[40px] p-[100px] grid grid-cols-2 gap-20 items-center overflow-hidden relative min-h-[600px] max-xl:p-[60px] max-lg:grid-cols-1 max-lg:text-center">
                    <div className="relative z-[2]">
                        <span className="text-sm font-semibold text-white mb-10 block">About us</span>
                        <h2 className="text-[80px] max-xl:text-[60px] font-semibold leading-none text-primary mb-10 tracking-[-0.04em]">
                            By Europeans, <br />for Europeans
                        </h2>
                        <p className="text-[22px] text-white opacity-90 leading-[1.4] mb-[60px] max-w-[480px] max-lg:mx-auto max-lg:mb-10">
                            Our vision is to empower governments, organizations and individuals with control and independence in the online realm.
                        </p>
                        <button className="bg-primary text-black py-4 px-8 rounded-xl font-semibold text-base inline-flex items-center gap-3 cursor-pointer max-lg:justify-center">
                            Read more about us <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="relative flex justify-center items-center h-full min-h-[480px] max-xl:min-h-[400px] max-lg:min-h-[300px] max-lg:mt-10">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-auto flex justify-center items-center opacity-70 pointer-events-none z-[1] mix-blend-screen">
                                <img src="/europe-map-visual.png" alt="Europe Map" className="w-full h-auto brightness-[0.65] contrast-[1.1] grayscale" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] z-[2] max-lg:w-[240px] max-lg:h-[240px]">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={`absolute text-white text-[32px] leading-none max-lg:text-2xl star-${i + 1}`}>★</div>
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

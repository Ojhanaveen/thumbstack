import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="bg-primary min-h-[90vh] flex flex-col pt-0 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center text-center flex-1 w-full justify-between pt-[140px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-[1000px] flex flex-col justify-center items-center mt-auto mb-auto"
                >
                    <h1 className="text-[92px] xl:text-[92px] lg:text-[72px] md:text-[72px] sm:text-[48px] max-[480px]:text-[48px] font-medium leading-[1.1] tracking-[-0.03em] mb-[60px] text-[#121212] text-center">
                        By Europeans, for Europeans
                    </h1>
                    <p className="text-2xl max-w-[700px] mx-auto text-[#121212] leading-[1.3]">
                        Privacy and security that europeans need, demand and expect. Without giving other nations control over our our data.
                    </p>
                </motion.div>

                <div className="w-full flex gap-10 pb-[60px] max-lg:grid max-lg:grid-cols-2 max-[480px]:grid-cols-1">
                    <div className="flex-1 text-left flex flex-col max-lg:flex-auto max-lg:p-0">
                        <div className="w-full h-px bg-black/20 mb-6"></div>
                        <span className="text-base font-bold block mb-3 text-black">No interference</span>
                        <span className="text-[15px] font-normal text-black opacity-60 block leading-[1.3] max-w-[240px]">No third-party interference</span>
                    </div>
                    <div className="flex-1 text-left flex flex-col max-lg:flex-auto max-lg:p-0">
                        <div className="w-full h-px bg-black/20 mb-6"></div>
                        <span className="text-base font-bold block mb-3 text-black">1st cloud platform</span>
                        <span className="text-[15px] font-normal text-black opacity-60 block leading-[1.3] max-w-[240px]">To allow data control and ownership</span>
                    </div>
                    <div className="flex-1 text-left flex flex-col max-lg:flex-auto max-lg:p-0">
                        <div className="w-full h-px bg-black/20 mb-6"></div>
                        <span className="text-base font-bold block mb-3 text-black">1st cloud infrastructure</span>
                        <span className="text-[15px] font-normal text-black opacity-60 block leading-[1.3] max-w-[240px]">To provide transparency over your data streams</span>
                    </div>
                    <div className="flex-1 text-left flex flex-col max-lg:flex-auto max-lg:p-0">
                        <div className="w-full h-px bg-black/20 mb-6"></div>
                        <span className="text-base font-bold block mb-3 text-black">Dynamic infrastructure</span>
                        <span className="text-[15px] font-normal text-black opacity-60 block leading-[1.3] max-w-[240px]">Cloud, hybrid, or on-prem form</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

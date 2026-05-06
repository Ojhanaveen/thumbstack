import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="bg-primary-dark min-h-[85vh] flex flex-col pt-0 relative overflow-hidden text-white mt-[76px]">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-green-600 blur-[100px]"></div>
                <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-orange-600 blur-[100px]"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center text-center flex-1 w-full justify-center relative z-10 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-[900px] flex flex-col justify-center items-center"
                >
                    <span className="text-accent-alt font-medium tracking-widest uppercase text-sm mb-6 border border-accent-alt/30 px-4 py-1.5 rounded-full bg-accent-alt/10">
                        Premium Technical Consultancy
                    </span>
                    <h1 className="text-[64px] md:text-[80px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 text-white">
                        Optimize. Automate. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Evolve.</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-[700px] mx-auto text-gray-300 leading-relaxed mb-12">
                        We empower businesses with cutting-edge AI, seamless cloud infrastructure, and intelligent automation to scale faster and smarter.
                    </p>
                    <div className="flex gap-4 max-sm:flex-col">
                        <a href="#services" className="bg-accent hover:bg-red-800 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors">
                            Explore Services
                        </a>
                        <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                            Book Consultation
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

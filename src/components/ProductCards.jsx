import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
    {
        title: "Apura IaaS.",
        tag: "Run safely.",
        description: "Apura IaaS is our secure cloud computing infrastructure built on our sovereign network to run your critical applications in a safe and secure cloud-native environment.",
        color: "#E3FF73",
        isPrimary: true
    },
    {
        title: "Apura Workspace.",
        tag: "Work privately.",
        description: "Apura Workspace is a suite of collaborative tools designed to help teams work faster and smarter. Using our sovereign network, it keeps your communications private and encrypted at all times.",
        color: "#EBEBEB",
        isPrimary: false
    },
    {
        title: "Apura Socials.",
        tag: "Share confidently.",
        description: "A suite of localized social media applications designed to empower and connect the European community on their terms.",
        color: "#EBEBEB",
        isPrimary: false
    }
];

const ProductCards = () => {
    return (
        <section className="py-[120px]" id="products">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-2xl mb-[60px] font-medium opacity-80">Our products</h2>
                <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-1 max-xl:max-w-[500px] max-xl:mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="p-12 rounded-[20px] flex flex-col justify-between min-h-[520px]"
                            style={{ backgroundColor: product.color }}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div>
                                <span className="text-lg font-semibold mb-3 block">{product.tag}</span>
                                <h3 className="text-2xl font-semibold mb-6">{product.title}</h3>
                                <p className="text-[15px] leading-relaxed opacity-80">{product.description}</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <button className="flex items-center gap-2 text-sm font-semibold opacity-60 hover:opacity-100">
                                    Read more <ArrowUpRight size={18} />
                                </button>
                                {product.isPrimary && (
                                    <button className="bg-primary-dark text-white p-4 rounded-xl font-semibold w-full">Book a demo</button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;

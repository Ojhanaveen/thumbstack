import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './ProductCards.css';

const products = [
    {
        title: "Apura IaaS.",
        tag: "Run safely.",
        description: "Apura IaaS is our secure cloud computing infrastructure built on our sovereign network to run your critical applications in a safe and secure cloud-native environment.",
        color: "#E3FF73",
        textColor: "var(--text-main)",
        isPrimary: true
    },
    {
        title: "Apura Workspace.",
        tag: "Work privately.",
        description: "Apura Workspace is a suite of collaborative tools designed to help teams work faster and smarter. Using our sovereign network, it keeps your communications private and encrypted at all times.",
        color: "#EBEBEB",
        textColor: "var(--text-main)",
        isPrimary: false
    },
    {
        title: "Apura Socials.",
        tag: "Share confidently.",
        description: "A suite of localized social media applications designed to empower and connect the European community on their terms.",
        color: "#EBEBEB",
        textColor: "var(--text-main)",
        isPrimary: false
    }
];

const ProductCards = () => {
    return (
        <section className="products-section" id="products">
            <div className="container">
                <h2 className="products-heading">Our products</h2>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="product-card"
                            style={{ backgroundColor: product.color }}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="card-top">
                                <span className="product-tag">{product.tag}</span>
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-desc">{product.description}</p>
                            </div>
                            <div className="card-footer">
                                <button className="read-more">
                                    Read more <ArrowUpRight size={18} />
                                </button>
                                {product.isPrimary && (
                                    <button className="book-demo-btn">Book a demo</button>
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

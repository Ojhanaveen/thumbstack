import React from 'react';

const JoinSection = () => {
    return (
        <section className="bg-white py-12 border-b border-gray-200 shadow-sm relative z-20">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-primary mb-2 font-heading">50+</span>
                        <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Projects Delivered</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-primary mb-2 font-heading">99%</span>
                        <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Client Satisfaction</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-primary mb-2 font-heading">24/7</span>
                        <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Support Available</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-primary mb-2 font-heading">10x</span>
                        <span className="text-sm text-text-muted font-medium uppercase tracking-wider">ROI Achieved</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;

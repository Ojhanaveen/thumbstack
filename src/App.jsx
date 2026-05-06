import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinSection from './components/JoinSection';
import ProductCards from './components/ProductCards';
import MissionSection from './components/MissionSection';
import Roadmap from './components/Roadmap';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <JoinSection />
      <ProductCards />
      <MissionSection />
      <Roadmap />

      {/* CTA / Newsletter Section */}
      <section className="bg-bg-light py-[100px] border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-text-muted mb-10 max-w-[600px] mx-auto">
            Subscribe to our newsletter for the latest insights in AI, automation, and cloud technology, or reach out directly to start your project.
          </p>
          <div className="flex w-full max-w-[500px] mx-auto bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
            <input type="email" placeholder="Enter your email address" className="flex-1 py-4 px-6 border-none bg-transparent text-sm text-primary outline-none" />
            <button className="bg-accent hover:bg-red-800 text-white px-8 font-medium text-sm transition-colors">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-[80px] pb-10" id="contact">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[60px]">
            {/* Brand */}
            <div>
              <div className="flex text-2xl font-bold font-heading tracking-tight mb-6">
                  <span className="text-[#3B82F6]">Flow</span>
                  <span className="text-[#10B981]">Automate</span>
                  <span className="text-[#F59E0B] ml-2">AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Optimizing operations, automating workflows, and evolving businesses through premium technical consultancy.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"><Facebook size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">AI & Machine Learning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cloud Infrastructure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">DevOps & Automation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Data Analytics</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">123 Innovation Drive, Tech District, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-accent shrink-0" />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-accent shrink-0" />
                  <span className="text-gray-400 text-sm">hello@flowautomate.ai</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} FlowAutomate AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

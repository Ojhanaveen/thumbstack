import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinSection from './components/JoinSection';
import ProductCards from './components/ProductCards';
import MissionSection from './components/MissionSection';
import Roadmap from './components/Roadmap';
import EuropeMapSVG from './components/EuropeMapSVG';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <JoinSection />

      <section className="py-[160px] text-left px-5 md:px-10" id="governance">
        <div className="max-w-[1400px] mx-auto px-10">
          <h2 className="text-[64px] max-md:text-[40px] leading-[1.05] font-medium tracking-[-0.04em] max-w-[900px]">
            APURA is an ecosystem <span className="italic font-normal">dedicated</span> to the privacy and security of their users; completely build from scratch.
          </h2>
        </div>
      </section>

      <ProductCards />
      <MissionSection />
      <Roadmap />

      <section className="py-[100px] border-t border-black/5 text-center px-5 md:px-10" id="careers">
        <div className="max-w-[1400px] mx-auto px-10">
          <p className="text-[28px] font-medium mb-[30px]">Become a supporter and help us on our Journey</p>
          <button className="text-base font-medium border border-black py-3 px-8 rounded-full bg-transparent">
            Read more about how to {'—>'}
          </button>
        </div>
      </section>

      <section className="bg-primary py-[100px]">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center gap-20 max-lg:flex-col max-lg:text-center max-lg:gap-10">
          <div>
            <h2 className="text-5xl font-medium mb-6 text-black tracking-[-0.02em]">Subscribe to our Newsletter</h2>
            <p className="text-lg max-w-[440px] text-black opacity-90 leading-[1.4]">If you want to follow our progress on developing what Europeans want and need, done by Europeans.</p>
          </div>
          <div className="flex w-full max-w-[580px] bg-black/5 p-px rounded-xl border border-black/80">
            <input type="email" placeholder="Enter your email" className="flex-1 py-[18px] px-6 border-none bg-transparent text-sm text-black outline-none placeholder:text-black/80 placeholder:font-medium" />
            <button className="bg-white text-black px-10 rounded-r-[11px] font-medium text-[13px] border-l border-black/80 whitespace-nowrap">Subscribe to our newsletter</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white pt-[100px] pb-[60px]" id="contact">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-start relative max-lg:flex-col max-lg:gap-[60px]">
          <div className="flex-1 flex flex-col h-full">
            <div className="text-xl font-bold mb-[60px] text-white">APURA CLOUD</div>

            <div className="flex gap-[100px] mb-[150px] max-xl:gap-[60px] max-lg:flex-wrap max-lg:mb-[60px]">
              <div>
                <h4 className="text-sm text-[#666] mb-[30px] font-medium">Products</h4>
                <ul className="list-none flex flex-col gap-4">
                  <li className="text-sm font-semibold text-white">Apura IaaS</li>
                  <li className="text-sm font-semibold text-white">Apura Workspace</li>
                  <li className="text-sm font-semibold text-white">Apura Socials</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-[#666] mb-[30px] font-medium">Roadmap</h4>
                <ul className="list-none flex flex-col gap-4">
                  <li className="text-sm font-semibold text-white">Stage 1</li>
                  <li className="text-sm font-semibold text-white">Stage 2</li>
                  <li className="text-sm font-semibold text-white">Stage 3</li>
                  <li className="text-sm font-semibold text-white">Stage 4</li>
                  <li className="text-sm font-semibold text-white">Stage 5</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-[#666] mb-[30px] font-medium">Legal</h4>
                <ul className="list-none flex flex-col gap-4">
                  <li className="text-sm font-semibold text-white">Help us on our journey</li>
                  <li className="text-sm font-semibold text-white">Terms & Conditions</li>
                  <li className="text-sm font-semibold text-white">Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex gap-5 mb-[30px]">
                <Facebook size={20} className="text-primary cursor-pointer transition-opacity duration-300 hover:opacity-80" />
                <Instagram size={20} className="text-primary cursor-pointer transition-opacity duration-300 hover:opacity-80" />
                <Twitter size={20} className="text-primary cursor-pointer transition-opacity duration-300 hover:opacity-80" />
                <Youtube size={20} className="text-primary cursor-pointer transition-opacity duration-300 hover:opacity-80" />
              </div>
              <p className="text-[13px] font-medium text-[#666]">© 2025 Apura Cloud. All rights reserved.</p>
            </div>
          </div>

          <div className="relative w-[500px] h-[400px] flex justify-center items-center max-lg:w-full max-lg:h-[300px] max-lg:justify-center">
            <div className="w-full h-full relative flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto opacity-15 mix-blend-screen">
                <img src="/europe-map-visual.png" alt="Europe Map" className="w-full h-auto brightness-[0.6] contrast-[1.1] grayscale" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] z-[2]">
                {[...Array(12)].map((_, i) => <div key={i} className="star-mini absolute text-white text-xl leading-none">★</div>)}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

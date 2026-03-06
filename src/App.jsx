import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinSection from './components/JoinSection';
import ProductCards from './components/ProductCards';
import MissionSection from './components/MissionSection';
import Roadmap from './components/Roadmap';
import EuropeMapSVG from './components/EuropeMapSVG';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JoinSection />

      <section className="mission-intro section" id="governance">
        <div className="container">
          <h2 className="mission-text">
            APURA is an ecosystem <span className="highlight-text">dedicated</span> to the privacy and security of their users; completely build from scratch.
          </h2>
        </div>
      </section>

      <ProductCards />
      <MissionSection />
      <Roadmap />

      <section className="cta-section section" id="careers">
        <div className="container cta-container">
          <p className="cta-text">Become a supporter and help us on our Journey</p>
          <button className="cta-btn">Read more about how to {'—>'}</button>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-content">
          <div className="newsletter-text">
            <h2>Subscribe to our Newsletter</h2>
            <p>If you want to follow our progress on developing what Europeans want and need, done by Europeans.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe to our newsletter</button>
          </div>
        </div>
      </section>


      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">APURA CLOUD</div>

            <div className="footer-nav">
              <div className="footer-column">
                <h4>Products</h4>
                <ul>
                  <li>Apura IaaS</li>
                  <li>Apura Workspace</li>
                  <li>Apura Socials</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Roadmap</h4>
                <ul>
                  <li>Stage 1</li>
                  <li>Stage 2</li>
                  <li>Stage 3</li>
                  <li>Stage 4</li>
                  <li>Stage 5</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li>Help us on our journey</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom-info">
              <div className="footer-socials">
                <Facebook size={20} className="social-icon" />
                <Instagram size={20} className="social-icon" />
                <Twitter size={20} className="social-icon" />
                <Youtube size={20} className="social-icon" />
              </div>
              <p className="footer-copyright">© 2025 Apura Cloud. All rights reserved.</p>
            </div>
          </div>

          <div className="footer-visual">
            <div className="europe-map-mini">
              <div className="europe-map-mini-svg-container">
                <img src="/europe-map-visual.png" alt="Europe Map" className="europe-map-mini-image" />
              </div>
              <div className="stars-mini">
                {[...Array(12)].map((_, i) => <div key={i} className="star-mini">★</div>)}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

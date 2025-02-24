import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay playsInline poster="/images/KLS.png" preload="auto" loop muted className="background-video">
            <source src="/videos/lawn-video.mp4" type="video/mp4" />
            <source src="/videos/lawn-video.webm" type="video/webm" />
            <source src="/videos/lawn-video.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-tagline">Precision. Passion. Perfection – The Kiwi Lawn Services Way.</h1>
          <div className="cta-buttons">
            <Link to="/calculator" className="btn btn-primary">Get a Free Estimate</Link>
            <Link to="/gallery" className="btn btn-secondary">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="service-highlights">
        <h2 className="section-title">Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <span className="icon">✅</span>
            <h3>Lawn Mowing</h3>
            <p>Perfectly edged, lush green, and precise cuts every time.</p>
          </div>
          <div className="service-card">
            <span className="icon">🌿</span>
            <h3>Garden Care</h3>
            <p>From trimming to weeding, we keep your garden thriving.</p>
          </div>
          <div className="service-card">
            <span className="icon">📅</span>
            <h3>Scheduled Maintenance</h3>
            <p>Set and forget – we maintain your lawn all year.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
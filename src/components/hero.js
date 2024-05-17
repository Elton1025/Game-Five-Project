import React from "react";
import "./hero.css";
import bgislogo from "../images/BGIS_2024_Logo.svg";
const Hero = () => {
    return (
        <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Draft your dream Esports team.</h1>
            <p>Experience the thrill of Esports fantasy like never before. Build your champion squad, compete against friends, and dominate the leaderboard.</p>
            <button>Join the Challenge</button>
          </div>
          <div className="hero-image">
            {/* Add an engaging image or video related to Esports */}
            <img src={bgislogo} alt="Esports fantasy competition" className="bgis-logo"/>
          </div>
        </section>
  
        {/* About Section */}
        <section className="about">
          <h2>How it Works</h2>
          <div className="about-cards">
            <div className="about-card">
              <h3>Draft Your Team</h3>
              <p>Choose from a pool of top Esports athletes across various games.</p>
            </div>
            <div className="about-card">
              <h3>Dominate the Competition</h3>
              <p>Compete against your friends or join global leagues to test your skills.</p>
            </div>
            <div className="about-card">
              <h3>Win Big Rewards</h3>
              <p>Climb the leaderboard and earn exciting prizes for your fantasy prowess.</p>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="features">
          <h2>Unbeatable Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <i className="fas fa-gamepad"></i> {/* Add Font Awesome icon for gamepad */}
              <h3>Extensive Game Coverage</h3>
              <p>Draft from a wide range of popular Esports titles to create your ultimate team.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-user-friends"></i> {/* Add Font Awesome icon for friends */}
              <h3>Compete with Friends</h3>
              <p>Challenge your friends to private leagues and bragging rights.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-trophy"></i> {/* Add Font Awesome icon for trophy */}
              <h3>Rewarding Gameplay</h3>
              <p>Earn points based on real-world Esports performance and climb the leaderboard for amazing prizes.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line"></i> {/* Add Font Awesome icon for chart */}
              <h3>Detailed Stats & Insights</h3>
              <p>Gain valuable insights with comprehensive player stats and team analysis to make informed draft decisions.</p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="cta">
          <h2>Ready to Draft Your Champions?</h2>
          <button>Join the Challenge Now!</button>
        </section>
  
        {/* Social Proof (Optional) */}
        {/*<section className="social-proof">
          <h2>What People Are Saying</h2>
          
        </section>*/}
  
        {/* Footer */}
        <footer>
          <p>&copy; 2024 Esports Fantasy. All Rights Reserved.</p>
        </footer>
      </div>

    );
}

export default Hero;
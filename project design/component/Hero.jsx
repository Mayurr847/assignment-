import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div class="container">
        <div class="profile-image">
          <img src="image.png" alt="Profile" />
        </div>
        <div class="details">
        <h1>Hello</h1>
        <h2>I'm Mayur Prajapati</h2>
        <p>
        Welcome to my personal website! I’m a passionate developer and travel enthusiast. I’ve completed my MCA from Chimanbhai Patel College and currently work on creating impactful software projects.
        I love exploring natural places like <span>seas, mountains, and forests</span>, and I’m always keen to learn and grow.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

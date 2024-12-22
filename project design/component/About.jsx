import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      {/* <h2>About Me</h2>
      <p>
        I am a ReactJS Developer with a passion for creating interactive and user-friendly web applications.
      </p> */}
          <div className="about-container">
      <div className="image-section">
        <img
          src="virat-kohli.jpg"
          alt="About Me"
        />
      </div>
      <div className="text-section">
        <h1>ABOUT ME!</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <p>
          This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
        </p>
        <button>See Resume</button>
      </div>
    </div>
    </section>

  );
};

export default About;

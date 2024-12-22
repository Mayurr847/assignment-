import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    // <footer className="footer">
    //   <p>© 2024 Mayur Prajapati | All Rights Reserved</p>
    // </footer>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-item">
      <h3>Phone</h3>
      <p>+91 786-281-9404</p>
    </div>
    <div class="footer-item">
      <h3>Email</h3>
      <p>Prajapatimayurr564@gmail.com</p>
    </div>
    <div class="footer-item">
      <h3>Follow Me</h3>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/mayur-prajapati-354436221/"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/mayurr847/"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="footer-item footer-rights">
      <p>© 2024 By Mayur Prajapati.</p>
      <p>All Rights Reserved</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;

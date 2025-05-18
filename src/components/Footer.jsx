import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              We are a passionate team committed to bringing the best products
              to our customers. Our goal is to provide top-notch service and
              high-quality products.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <p>Email: kalaloop@gmail.com</p>
            <p>Phone: 18007061000</p>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Footer.js
import React from "react";
import "../footer/footer.css"; // Optional: for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>About Us</h4>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/returns">Return Policy</a>
          <a href="/faq">FAQs</a>
        </div>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="footer-social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h4>Newsletter</h4>
        <div className="footer-newsletter">
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-column">
        <h4>Payment Methods</h4>
        <div className="footer-payment-methods">
          <p>Accepted Payment Methods:</p>
          {/* Add payment method icons here */}
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Kapada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

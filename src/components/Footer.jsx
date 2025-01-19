import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  // State to track scroll position
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the "scroll to top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Show button after scrolling 200px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-main">
      <div className="footerbg">
        <div className="footer-content">
          <div className="footer-left">
            <img
              src="assets/footerlogo.png"
              alt="Logo"
              className="footer-logo"
            />
            <h3>JAINIK SOLANKI</h3>
            <p>Your Ride, Your Way – Rent a Taxi Today!</p>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-right">
            <h3>CONTACT</h3>
            <p>
              <a href="tel:+8200740782" style={{ color: "#ffffff", textDecoration: "none" }}>
                <i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i> +8200740782
              </a>
            </p>
            <p>
              <a href="https://wa.me/8200740782" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "none" }}>
                <i className="fa-brands fa-whatsapp" style={{ color: "#ffffff" }}></i> Chat with Me
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop} 
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default Footer;

import React from 'react';
import './footer.css';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo-section">
            </div>
            
              <div className="newsletter-form">
                <h3>Sign up and try Hexnode free for 14 days!
                </h3>
                <input type="email" placeholder="Your Email Address" className="newsletter-input" />
                <Button variant="contained" className="newsletter-button">Subscribe</Button>
                    </div>
          </div>
          
       
          
          <div className="footer-bottom">
            <div className="copyright">
            Terms of Use - Privacy - Cookies            </div>
            <div className="legal-links">
            Copyright © 2025 Mitsogo Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
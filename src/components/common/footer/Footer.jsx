import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer footer-cont">
      <div className="footer-wr">
        <div className="social-media-logos">
          <div className="social-media-logo facebook"></div>
          <div className="social-media-logo insta"></div>
          <div className="social-media-logo linkedin"></div>
        </div>
        <div className="footer-logo">
          <p>Defendme</p>
        </div>
        <div className="footer-copy-rights">
          <p>© 2022 Defendme. all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

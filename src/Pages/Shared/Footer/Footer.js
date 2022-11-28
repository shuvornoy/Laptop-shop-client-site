import React from 'react';

const Footer = () => {
    return (
      <div className="text-white" style={{ backgroundColor: "#140B5C" }}>
        <footer className="footer p-10 ">
          <div>
            <h1 className="text-5xl font-bold mb-5">Laptop Shop</h1>
            <p>
              www.laptopshop.com
              <br />
              Providing reliable tech since 2022
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a href="/" className="link link-hover">
              Branding
            </a>
            <a href="/" className="link link-hover">
              Design
            </a>
            <a href="/" className="link link-hover">
              Marketing
            </a>
            <a href="/" className="link link-hover">
              Advertisement
            </a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a href="/" className="link link-hover">
              About us
            </a>
            <a href="/" className="link link-hover">
              Contact
            </a>
            <a href="/" className="link link-hover">
              Jobs
            </a>
            <a href="/" className="link link-hover">
              Press kit
            </a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href="/" className="link link-hover">
              Terms of use
            </a>
            <a href="/" className="link link-hover">
              Privacy policy
            </a>
            <a href="/" className="link link-hover">
              Cookie policy
            </a>
          </div>
        </footer>
        <div className="text-center pb-2">
          <p>Copyright © 2022 - All right reserved by www.laptopshop.com</p>
        </div>
      </div>
    );
};

export default Footer;
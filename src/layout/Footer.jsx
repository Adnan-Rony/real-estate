import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <nav>
            <header className="footer-title">Caterories</header>
            <Link className="link link-hover">townhouses</Link>
            <Link className="link link-hover">apartments</Link>
            <Link className="link link-hover">vacation rentals</Link>
            <Link className="link link-hover"> Single-family</Link>
          
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link className="link link-hover">About us</Link>
            <Link to={'/contact'} className="link link-hover">Contact</Link>
           
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        
        </footer>
      
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import logo from "../images/logo-removebg-preview.png";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const [mail, setMail] = useState("");
  const date = new Date().getFullYear();
  const handleMail = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer">
      <section className="footer-container">
        <div className="footer-div">
          <div className="footer-img">
            <img src={logo} alt="footer logo" />
          </div>
          <a href="mailto:support@joinshopline.com">
            <li>support@joinshopline.com</li>
          </a>
          <a href="tel:256-75771-2667">
            <li>+256-75771-2667</li>
          </a>
        </div>
        <div className="company footer-div">
          <h4>company</h4>
          <ul>
            <li>home</li>
            <li>features</li>
            <li>how it works</li>
            <li>compare</li>
          </ul>
        </div>
        <div className="help & support footer-div">
          <h4>help & support</h4>
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-div  address">
          <h4>Our Address</h4>
          <ul>
            <li>Makerere University</li>
          </ul>
          <div className="icon">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagramSquare />
          </div>
          <div className="sign-up">
            <p>sign up for newsletter</p>

            <input
              type="mail"
              name="mail"
              id="mail"
              placeholder="email address"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <button
              type="
            submit"
              onClick={handleMail}
              className="sign-up-btn"
            >
              subscribe
            </button>
          </div>
        </div>
      </section>
      <section>
        <p className="copyright">
          &copy; copyright {date} <span>Shopline</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;

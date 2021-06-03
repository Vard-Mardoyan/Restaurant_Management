import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import logo from "./restaurant-logo.jpg";
export const Footer = () => {
  return (
    <div className="App-footer">
      <div className="first-footer-container">
        <h1>LOGO...</h1>
        <img src={logo} alt="logo" />
        <p className="footer-inner-text">
          We are passionate about providing a unique dining experience that will
          leave you feeling like we have put the extra sprinkles on your visit!
          Our team is full of enthusiasm for you to fully indulge in our
          delicious menu and will be happy to serve you.
        </p>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
        <FaGooglePlusG />
      </div>
      <div className="second-footer-container">
        <ul className="footer-inner-container">
          <li>
            <Link to="/" className="footer-container-link">
              DELIVERY
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              SECURE PAYMENT
            </Link>
          </li>

          <li>
            <Link to="/#" className="footer-container-link">
              FAQS
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              SUPPORT 24/7
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              PAGES CONFIGURATION
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              PRICES DROP
            </Link>
          </li>

          <li>
            <Link to="/#" className="footer-container-link">
              BEST SALES
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              SITEMAP
            </Link>
          </li>

          <li>
            <Link to="/#" className="footer-container-link">
              BLOG
            </Link>
          </li>
        </ul>
      </div>
      <div className="third-footer-container">
        <ul className="footer-inner-container">
          <li>
            <Link to="/" className="footer-container-link">
              PERSONAL INFO
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              ORDERS
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              CREDIT SLIPS
            </Link>
          </li>

          <li>
            <Link to="/#" className="footer-container-link">
              ADDRESSES
            </Link>
          </li>
          <li>
            <Link to="/#" className="footer-container-link">
              MY WISHLISTS
            </Link>
          </li>
        </ul>
      </div>
      <div className="fourth-footer-container">
        <p>STORE INFORMATION</p>

        <p>
          <FaMapMarkerAlt /> The Company Name Inc. 9870 St
          <br />
          Vincent Place, Glasgow, DC 45
        </p>

        <p>
          <FaPhoneAlt />
          800-2345-6799
        </p>
        <br />

        <p>
          <FaPrint />
          800-2345-6799
        </p>
        <br />

        <p>
          <FaEnvelope />
          demo@demo.com
        </p>
      </div>
    </div>
  );

};

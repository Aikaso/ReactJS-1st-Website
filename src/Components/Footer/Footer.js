import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
  <div className='footer-container'>
      <section className='footer-subscription'>
          <p>Join our exclusive membership to receive the latest news and trends</p>
          <p className='footer-subscription-text'>You can unsubscribe any time.</p>
          <div className="input-areas">
              <form>
                  <input className='footer-input' name='email' type='email' placeholder='Your Email' />
                  <Button buttonSize='btn--medium' buttonStyle='btn--outline'>Subscribe</Button>
              </form>
          </div>
      </section>
      <section className='social-media'>
        <div className="social-media-wrap">
            <div className="footer-logo">
            <Link to='/' className='social-logo'>
            <MdFingerprint className='navbar-icon' />
                My Website
            </Link>
            </div>
            <div className='website-rights'>AinarsK @ 2022</div>
            <div className="social-icons">
                <Link to='/' className='social-icon-link'>
                    <FaFacebook />
                </Link>
                <Link to='/' className='social-icon-link'>
                    <FaInstagram />
                </Link>
                <Link to='/' className='social-icon-link'>
                    <FaYoutube />
                </Link>
                <Link to='/' className='social-icon-link'>
                    <FaTwitter />
                </Link>
                <Link to='/' className='social-icon-link'>
                    <FaLinkedin />
                </Link>
            </div>
        </div>
      </section>
  </div>
  );
}

export default Footer;

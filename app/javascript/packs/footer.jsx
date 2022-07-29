import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Link from '../components/link';

const Footer = () => (
  <div className="footer">
    <div className="container fgs-al  fgs-al-align-items-flex-start  fgs-al-justify-content-space-between">
      <div className="company-info fgs-ali fgs-al fgs-al-v fgs-al-g-10 ">
        <span className="title fgs-ali">2021 BiteSite Inc.</span>

        <div className="fgs-al fgs-ali  fgs-al-v fgs-al-g-6">
          <span className="info fgs-ali">204 - 78 George St.</span>
          <span className="info fgs-ali">Ottawa, ON</span>
          <span className="info fgs-ali">K1N 5W1</span>
          <span className="info fgs-ali">info@bitesite.ca</span>
        </div>
      </div>

      <div className="links fgs-al fgs-ali  fgs-al-h fgs-al-align-items-flex-start fgs-al-g-60">
        <div className="company-links fgs-ali fgs-al fgs-al-v fgs-al-g-6">
          <span className="links-title fgs-ali">COMPANY</span>
          <Link path="/services" className="fgs-ali">
            Services
          </Link>
          <Link path="/about" className="fgs-ali">
            About
          </Link>
          <Link path="/careers" className="fgs-ali">
            Careers
          </Link>
          <Link path="/contact" className="fgs-ali">
            Contact
          </Link>
        </div>

        <div className="resources-links fgs-ali fgs-al fgs-al-v fgs-al-g-6">
          <span className="links-title fgs-ali">RESOURCES</span>
          <Link path="/blog" className="fgs-ali">
            Blog
          </Link>
          <Link path="/news" className="fgs-ali">
            News
          </Link>
          <Link path="/playbook" className="fgs-ali">
            Playbook
          </Link>
        </div>

        <div className="social-media-links fgs-ali fgs-al fgs-al-v fgs-al-g-10">
          <span className="links-title fgs-ali">FOLLOW US</span>

          <div className="fgs-ali fgs-al fgs-al-h fgs-al-g-20 fgs-al-align-items-flex-center">
            <Link path="https://www.youtube.com/user/bitesiteca">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
            <Link path="https://www.twitter.com/bitesite">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('footer-component-mount-point');
  if (element) {
    ReactDOM.render(<Footer />, element);
  }
});

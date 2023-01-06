import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
import Link from './link';

const NavLinks = ({ className }) => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = window.location.pathname;
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
      }
    });
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link className="nav-link" path="/services">
        Services
      </Link>
      <Link className="nav-link" path="/about">
        About
      </Link>
      <Link className="nav-link" path="/blog">
        Blog
      </Link>
      <Link className="nav-link" path="/contact">
        Contact
      </Link>
    </motion.div>
  );
};

NavLinks.propTypes = {
  className: propTypes.string,
};

export default NavLinks;

import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
import Link from './link';

const NavLinks = ({ className }) => (
  <motion.div
    className={className}
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Link path="/services">Services</Link>
    <Link path="/about">About</Link>
    <Link path="/blog">Blog</Link>
    <Link path="/contact">Contact</Link>
  </motion.div>
);

NavLinks.propTypes = {
  className: propTypes.string,
};

export default NavLinks;

import React from 'react';
import reactDom from 'react-dom';
import Link from './link';

const NavLinks = () => (
  <div className="main-nav" id="main-nav">
    <Link path="/services">Services</Link>
    <Link path="/about">About</Link>
    <Link path="/blog">Blog</Link>
    <Link path="/contact">Contact</Link>
  </div>
);

export default NavLinks;

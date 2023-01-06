import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
import Link from "../components/link";
import logo from "../../assets/images/logo2015-blue.png";
import NavLinks from "../components/nav_links";
import { isMobileScreenSize } from "../src/utilities/general_helpers";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(780));

  const handleNavBarClick = () => {
    setShowNav(!showNav);
  };

  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(780));
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobileWidth]);

  return (
    <div id="header">
      <div className="container">
        <div className="logo-container">
          <Link path="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {isMobileWidth ? (
          <div className="mobile-menu-toggle-container">
            <Link path="#" onClick={handleNavBarClick}>
              <Icon icon={`quill:hamburger`} className="mobile-nav-icon" />
            </Link>
          </div>
        ) : (
          <div className="nav-links">
            <NavLinks className="regular-nav" />
          </div>
        )}
      </div>

      <AnimatePresence>
        {showNav && isMobileWidth && (
          <motion.div
            key="nav-links"
            className="mobile-nav-links-container"
            initial={{ x: "50%", y: "-70px" }}
            animate={{ y: "-70px", x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            exit={{ x: "50%", y: "-70px", transition: { duration: 0.4 } }}
          >
            <NavLinks className="mobile-nav-links" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("header-mount-point");
  if (element) {
    ReactDOM.render(<Header />, element);
  }
});

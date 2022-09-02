import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';
import Link from '../components/link';
import logo from '../../assets/images/logo2015-blue.png';
import NavLinks from '../components/nav_links';
import { isMobileScreenSize } from '../src/utilities/general_helpers';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavBarClick = () => {
    setShowNav(!showNav);
  };

  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(760));

  function resize() {
    if (isMobileScreenSize(830) !== isMobileWidth) {
      setIsMobileWidth(isMobileScreenSize(760));
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isMobileWidth]);

  return (
    <div id="header"> 
    <div className='container'>
      <div className="logo-container">
        <Link path="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>

        { isMobileWidth ? (
                <div className="mobile-menu-toggle-container">
                <Link path="#" onClick={handleNavBarClick}>
                  <Icon icon={`quill:hamburger`} className="mobile-nav-icon" />
                </Link>
                </div>

        ): 
        <div className='nav-links'>
                 <NavLinks className="regular-nav" />
        </div> }
</div>
      {showNav && isMobileWidth &&

      <div className='mobile-nav-links-container'> 
      <NavLinks className="mobile-nav-links"/> 
      </div>}

    
    
    </div>
    
  );

};

// const Header = () => (
//   <>
//     <div id="header">
//       <div className="container">
// <div className="logo-container">
//   <Link path="/" className="logo">
//     <img src={logo} alt="logo" />
//   </Link>
// </div>
// <div className="nav-links">
//   <NavLinks />
// </div>

//         <div className="mobile-menu-toggle-container">
//           <Link path="#" className="mobile-menu-toggle">
//             <Icon icon="quill:hamburger" />
//           </Link>
//         </div>
//       </div>
//     </div>

//     <div className="mobile-nav-links-container">
//       <div className="mobile-nav-links">
//         <NavLinks />
//       </div>
//     </div>
//   </>
// );

export default Header;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('header-mount-point');
  if (element) {
    ReactDOM.render(<Header />, element);
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const element = document.getElementById('header-mount-point');
//   if (element) {
//     ReactDOM.render(<Header />, element);
//   }
// });

// <div class="container">
// <div class='logo-container'>
//   <%= link_to image_tag("logo2015-blue.png", class: "logo"), root_path %>
// </div>
// <div class='nav-links'>
//   <%= render "layouts/nav_links" %>
// </div>

// <div class='mobile-menu-toggle-container'>
//   <%= link_to fa_icon("bars"), "/google", class: "mobile-menu-toggle" %>
// </div>
// </div>
// </div>

// <div class="mobile-nav-links-container">
// <div class="mobile-nav-links">
// <%= render "layouts/nav_links" %>
// </div>

import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import Link from '../components/link';

const Footer = () => {
  function signOut(e) {
    e.preventDefault();

    $.ajax({
      url: '/users/sign_out',
      method: 'DELETE',
      success: () => {
        window.location.reload();
      },
      error: () => {
        window.alert('There was an error signing out');
      },
    });
  }

  return (
    <div className="footer">
      <div className="container fgs-al fgs-al-align-items-flex-start  fgs-al-justify-content-space-between">
        <div className="company-info caption-light fgs-ali fgs-al fgs-al-v fgs-al-g-10 ">
          <span className="title caption-bold fgs-ali">BiteSite Inc.</span>

          <div className="info caption-light fgs-al fgs-ali  fgs-al-v fgs-al-g-6">
            <span className="caption-light fgs-ali">© 2021 BiteSite Inc.</span>

            <span className="caption-light fgs-ali company-address">
              204 - 78 George St.
              <br />
              Ottawa, ON <br /> K1N 5W1
            </span>
            <span className="caption-light fgs-ali company-address">info@bitesite.ca</span>
          </div>
          <div className="staff-session-links-container">
            {window.gon?.user_signed_in ? (
              <>
                <Link path="/staff_dashboard" className="caption-light staff-session-link">
                  Staff Dashboard
                </Link>

                <Link onClick={signOut} className="caption-light staff-session-link">
                  Staff Sign Out
                </Link>
              </>
            ) : (
              <Link path="/users/sign_in" className="caption-light staff-session-link">
                Staff Sign In
              </Link>
            )}
          </div>
        </div>

        <div className="links fgs-al fgs-ali  fgs-al-h fgs-al-align-items-flex-start fgs-al-g-60 ">
          <div className="caption-medium fgs-ali fgs-al fgs-al-v fgs-al-g-6">
            <span className="links-title fgs-ali">COMPANY</span>

            <div className="company-links caption-medium fgs-ali fgs-al fgs-al-v">
              <Link path="/services" target="_blank" className="fgs-ali caption-medium no-underline">
                Services
              </Link>

              <Link path="/about" target="_blank" className="fgs-ali caption-medium no-underline">
                About
              </Link>

              <Link path="/contact" target="_blank" className="fgs-ali caption-medium no-underline">
                Contact
              </Link>
            </div>
          </div>

          <div className="resources-links caption-medium fgs-ali fgs-al fgs-al-v fgs-al-g-6">
            <div className="caption-medium fgs-ali fgs-al fgs-al-v fgs-al-g-6">
              <span className="links-title fgs-ali">RESOURCES</span>
              <div className="company-links caption-medium fgs-ali fgs-al fgs-al-v">
                <Link path="/blog" target="_blank" className="fgs-ali caption-medium no-underline">
                  Blog
                </Link>
                <Link path="/news" target="_blank" className="fgs-ali caption-medium no-underline">
                  Newsletter
                </Link>
                <Link path="/playbook" target="_blank" className="fgs-ali caption-medium no-underline">
                  Playbook
                </Link>
              </div>
            </div>
          </div>

          <div className="social-media-links fgs-ali fgs-al fgs-al-v fgs-al-g-10">
            <span className="links-title fgs-ali">FOLLOW US</span>

            <div className="fgs-ali fgs-al fgs-al-h fgs-al-g-20 fgs-al-align-items-flex-center">
              <Link path="https://www.linkedin.com/company/bitesite/" target="_blank">
                <Icon icon="bxl:linkedin" />
              </Link>
              <Link path="https://www.youtube.com/user/bitesiteca" target="_blank">
                <Icon icon="ant-design:youtube-outlined" />
              </Link>
              <Link path="https://www.twitter.com/bitesite" target="_blank">
                <Icon icon="akar-icons:twitter-fill" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('footer-component-mount-point');
  if (element) {
    ReactDOM.render(<Footer />, element);
  }
});

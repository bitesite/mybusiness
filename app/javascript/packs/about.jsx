import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AboutHeader from "../components/About/about_header";
import OurProcess from "../components/About/our_process";
import OurTeam from "../components/About/our_team";
import { isMobileScreenSize } from "../src/utilities/general_helpers";
import GeneralPost from "../components/general/general_post";
import DarkBackgroundGeneralPost from "../components/general/dark_background_general_post";

const AboutPage = ({ teamMembers }) => {
  const [isMobileWidth, setIsMobileWidth] = useState(isMobileScreenSize(780));

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
    <div className="about-page fgs-al fgs-al-v frs-al-g-10">
      <AboutHeader isMobileWidth={isMobileWidth} />
      <OurProcess isMobileWidth={isMobileWidth} />
      <OurTeam teamMembers={teamMembers} isMobileWidth={isMobileWidth} />

      <DarkBackgroundGeneralPost
        image={LearnMoreAboutUs}
        header="Learn More About Us"
        text={
          <>
            <div className="learn-more-about-us-text fgs-al fgs-al-v fgs-al-g-20 fgs-al-align-items-flex-start">
              <div className="body-regular">
                Take a look at some of the client projects we’ve worked on. Our
                experience ranges from one-page designs to full-stack web and
                mobile applications.
              </div>
              <a
                href="/case_studies"
                className="playbook-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Studies
                <svg
                  width="33"
                  height="16"
                  viewBox="0 0 33 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                    fill="#394243"
                  />
                </svg>
              </a>
            </div>
            <div className="learn-more-about-us-text fgs-al fgs-al-v fgs-al-g-20 fgs-al-align-items-flex-start">
              <div className="body-regular">
                We put our everyday practices into an openly available and
                constantly evolving playbook. We hope this helps put everyone on
                the same page and help you understand what it&apos;s like to
                work with us.
              </div>
              <a
                href="/playbook"
                className="playbook-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our Playbook
                <svg
                  width="33"
                  height="16"
                  viewBox="0 0 33 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                    fill="#394243"
                  />
                </svg>
              </a>
            </div>
            <div className="learn-more-about-us-text fgs-al fgs-al-v fgs-al-g-20 fgs-al-align-items-flex-start">
              <div className="body-regular">
                Besides our Custom Software Services, we like to create our own
                products. Whether it&apos;s to help out our daily work, pursue
                our passion, to learn something new, or just for fun, we like to
                build and share.
              </div>
              <a
                href="/products"
                className="products-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View our Products
                <svg
                  width="33"
                  height="16"
                  viewBox="0 0 33 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                    fill="#394243"
                  />
                </svg>
              </a>
            </div>
          </>
        }
        buttonHide
        positionImageRight={false}
      />
    </div>
  );
};

export default AboutPage;

AboutPage.propTypes = {};

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("about-page-component-mount-point");
  if (element) {
    const { teamMembers } = element.dataset;
    ReactDOM.render(
      <AboutPage teamMembers={JSON.parse(teamMembers)} />,
      element
    );
  }
});

import React from "react";
import learnMoreAboutUsImage from "../../../assets/images/learn_more_about_us.png";

const LearnMoreAboutUs = () => (
  <div className="component-learn-more-about-us fgs-al  fgs-al-v fgs-al-g-30 fgs-al-align-items-flex-start">
    <div className="container">
      <div className="learn-more-about-us-container fgs-al fgs-al-h fgs-al-g-30 fgs-al-align-items-flex-center fgs-al-justify-content-flex-center">
        <div className="learn-more-about-us-image">
          <img
            src={learnMoreAboutUsImage}
            alt="a small fictional animal has a lot of questions about web and software."
            className="learn-more-about-us-image"
          />
        </div>
        <div className="learn-more-about-us-content fgs-al fgs-al-v fgs-al-g-30 fgs-al-align-items-flex-start">
          <div className="learn-more-about-us-title heading-regular ">
            Learn More About Us
          </div>
          <div className="learn-more-about-us-text fgs-al fgs-al-v fgs-al-g-40 fgs-al-align-items-flex-start">
            <div className="body-regular">
              We put our everyday practices into an openly available and
              constantly evolving playbook. We hope this helps put everyone on
              the same page and help you understand what it’s like to work with
              us.
            </div>
            <a
              href="/playbook"
              className="playbook-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our Playbook <span>&#8594;</span>
            </a>
          </div>
          <div className="learn-more-about-us-text fgs-al fgs-al-v fgs-al-g-40 fgs-al-align-items-flex-start">
            <div className="body-regular">
              Besides our Custom Software Services, we like to create our own
              products. Whether it’s to help out our daily work, pursue our
              passion, to learn something new, or just for fun, we like to build
              and share.
            </div>
            <a
              href="/products"
              className="products-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our Products <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LearnMoreAboutUs;

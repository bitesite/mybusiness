import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import aboutHeroImage from '../../assets/images/about-hero-image.png';

const AboutPage = () => (
  <div className="about-page fgs-al  fgs-al-v frs-al-g-10">
    <div className="about-page-header fgs-al  fgs-al-v fgs-al-g-60">
      <h1 className="about-header-title">About Us</h1>
      <img src={aboutHeroImage} alt="about-main-pic" className="about-image" />
      <div className="about-content">
        BiteSite was founded in 2012 in Ottawa, Canada and started as a general service company offering a wide range of services
        including Web Design and Development, Photography, Graphic Design, Video production and more. Over the years, we've
        learned a lot and found out what we excel at and what customers gain most from our services. From that, we narrowed our
        focus to Custom Software - building custom solutions for customers’ specific needs. While we are capable of many
        platforms, we specialize in full-stack Web Applications and iOS and Android applications.
      </div>
    </div>
    <div className="about-page-beliefs  fgs-al  fgs-al-v fgs-al-g-60 fgs-al-align-items-center fgs-al-justify-content-flex-center">
      <div className="about-belief-title">Our Beliefs</div>
      <div className="about-belief-content  fgs-al  fgs-al-h frs-al-g-30 fgs-al-align-items-flex-start fgs-al-p-10">
        <div className="about-belief-item fgs-al fgs-al-v fgs-al-g-20  fgs-al-align-items-flex-start fgs-al-p-10">
          <div className="about-belief-item-title">
            <div>Transparency</div>
          </div>
          <div className="about-belief-item-content">
            We place honesty amongst ourselves and with our clients above business, money, or conflict. At BiteSite, we don’t shy
            away from speaking our mind, because we know the best teams are made up of authentic people who value collaboration
            and focus on solving problems together. We strive for open, honest, and frequent communication so that clients are
            never surprised.
          </div>
        </div>
        <div className="about-belief-item fgs-al fgs-al-v fgs-al-g-20  fgs-al-align-items-flex-start fgs-al-p-10">
          <div className="about-belief-item-title">
            <div>Flexibility</div>
          </div>
          <div className="about-belief-item-content">
            The reality is, it's very hard to predict how well a product, or even a client relationship, will do. Whether it be
            personalities, working style, or environment, there are a lot of factors that have to line up for a successful
            project. Over the years, we’ve learned to only implement what we found most useful, throw out what we found
            unnecessary, and add our own processes when needed.
          </div>
        </div>
        <div className="about-belief-item fgs-al fgs-al-v fgs-al-g-20  fgs-al-align-items-flex-start fgs-al-p-10">
          <div className="about-belief-item-title">
            <div>Predictability/ Collaborative Progress/ Iterations</div>
          </div>

          <div className="about-belief-item-content">
            We work best when there is a well structured, defined process that still allows for agile flexibility. We believe that
            small, frequent releases are better than waiting for the ‘perfect’ software. We take the MVP approach to most things.
            We include clients in our release Sprints and improve on projects iteratively.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;

AboutPage.propTypes = {};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('about-page-component-mount-point');
  if (element) {
    ReactDOM.render(<AboutPage />, element);
  }
});

import React from 'react';
import ReactDOM from 'react-dom';
import AboutHeader from '../components/About/about_header';
import OurProcess from '../components/About/our_process';

const AboutPage = () => (
  <div className="about-page fgs-al  fgs-al-v frs-al-g-10">
    <AboutHeader />
    <OurProcess />
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

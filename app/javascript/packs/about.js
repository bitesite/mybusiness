import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const AboutPage = () => (
  <div>
    <h1>About</h1>
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

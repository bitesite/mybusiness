import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ServicesPage = () => <div className="component-services" />;

export default ServicesPage;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('services-page-mount-point');

  if (element) {
    ReactDOM.render(<ServicesPage />, element);
  }
});

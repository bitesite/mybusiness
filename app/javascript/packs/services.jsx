import React from 'react';
import ReactDOM from 'react-dom';

const ServicesPage = () => <div id="component-services" />;

export default ServicesPage;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('services-page-mount-point');

  if (element) {
    ReactDOM.render(<ServicesPage />, element);
  }
});

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const servicesPage = () => {
  <h1>Services Page</h1>;
};
export default servicesPage;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('services-page-mount-point');

  if (element) {
    ReactDOM.render(<servicesPage />, element);
  }
});

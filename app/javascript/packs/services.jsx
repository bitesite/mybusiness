import React from 'react';
import ReactDOM from 'react-dom';
import productManagementImg from '../../assets/images/services_page/product_management.png';
import softwareDevImg from '../../assets/images/services_page/software_dev.png';
import uxUiDesignImg from '../../assets/images/services_page/ux_ui_design.png';

const ServicesPage = () => (
  <div id="component-services">
    <div className="container">
      <h1>We work with you to build custom software and web applications.</h1>
      <div className="product-management">
        <h2>Product Management</h2>
        <p className="text">
          Product management is all about deciding what to build, and when to build it. We'll help you decide what's important and
          what's not and priortize the features that will make the most impact in your product.
        </p>
        <div className="services-image">
          <img src={productManagementImg} alt="product-managment" />
        </div>
      </div>
      <div className="software-development">
        <h2>Software Development</h2>
        <p className="text">
          Our developers balance strong software engineering principles with our clients needs to deliver stable, powerful, and
          viable software. Everything from using modern languages and frameworks, to best practices around source control and
          deployment, we'll build a solution that suits you perfectly.
        </p>
        <div className="services-image">
          <img src={softwareDevImg} alt="software-dev" />
        </div>
      </div>
      <div className="ux/ui-design">
        <h2>UX/UI Design</h2>
        <p className="text">
          Whether it be a 5-minute conversation or full-blown prototypes, taking some time to think about how your users will
          interact with your app can make a big difference. We'll work with you to design the best user experience for your
          customers.
        </p>
        <div className="services-image">
          <img src={uxUiDesignImg} alt="uxui-design" />
        </div>
      </div>
    </div>
  </div>
);

export default ServicesPage;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('services-page-mount-point');

  if (element) {
    ReactDOM.render(<ServicesPage />, element);
  }
});

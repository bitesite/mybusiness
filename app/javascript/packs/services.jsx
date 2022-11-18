import React from 'react';
import ReactDOM from 'react-dom';
import productManagementImg from '../../assets/images/services_page/product_management.png';
import softwareDevImg from '../../assets/images/services_page/software_dev.png';
import uxUiDesignImg from '../../assets/images/services_page/ux_ui_design.png';
import GeneralPost from '../components/general/general_post';

const ServicesPage = () => {
  const header1 = 'Product Management';
  const text1 =
    "Product management is all about deciding what to build, and when to build it. We'll help you decide what's important and what's not and priortize the features that will make the most impact in your product.";

  const header2 = 'Software Development';
  const text2 =
    "Our developers balance strong software engineering principles with our clients needs to deliver stable, powerful, and viable software. Everything from using modern languages and frameworks, to best practices around source control and deployment, we'll build a solution that suits you perfectly.";

  const header3 = 'UX/UI Design';
  const text3 =
    "Our developers balance strong software engineering principles with our clients needs to deliver stable, powerful, and viable software. Everything from using modern languages and frameworks, to best practices around source control and deployment, we'll build a solution that suits you perfectly.";
  return (
    <div className="services-component">
      <div className="heading-regular services-header">We work with you to build custom software and web applications.</div>
      <GeneralPost className="services-post" header={header1} text={text1} image={productManagementImg} buttonHide />
      <GeneralPost className="services-post" header={header2} text={text2} image={softwareDevImg} buttonHide />
      <GeneralPost header={header3} text={text3} image={uxUiDesignImg} buttonHide />
    </div>
  );
};

export default ServicesPage;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('services-page-mount-point');

  if (element) {
    ReactDOM.render(<ServicesPage />, element);
  }
});

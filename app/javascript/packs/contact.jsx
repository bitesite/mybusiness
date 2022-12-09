import React from "react";
import ReactDOM from "react-dom";
import GeneralPost from "../components/general/general_post";
import ContactImage from "../../assets/images/contact_image.png";
import DarkBackgroundGeneralPost from "../components/general/dark_background_general_post";

const Contact = () => {
  const header = "Get in Touch!";
  const text = (
    <>
      <div className="body-regular contact-text-container">
        Excited about your project? Have some questions? Let us know below and
        we&apos;ll get back to you ASAP!
      </div>
      <div className="input-container">
        <label className="body-regular">Full Name</label>

        <input className="input-box-contact" type="text" required />

        <label className="body-regular">Email Address</label>

        <input
          className="input-box-contact"
          type="email"
          id="email"
          pattern=".+@globex\.com"
          required
        />

        <label className="body-regular">Message</label>

        <input
          className="input-box-contact message"
          type="message"
          id="message"
          size="584"
          required
        />
      </div>
    </>
  );

  const handleContactFormSubmit = () => {
    window.alert("Contact Form Submitted!");
  };

  return (
    <DarkBackgroundGeneralPost
      header={header}
      text={text}
      image={ContactImage}
      buttonText="Submit Message"
      buttonClass="primary-default"
      onClick={handleContactFormSubmit}
    />
  );
};

export default Contact;

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("contact-component-mount-point");
  if (element) {
    ReactDOM.render(<Contact />, element);
  }
});

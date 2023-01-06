import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';
import ContactImage from '../../assets/images/contact_image.png';
import DarkBackgroundGeneralPost from '../components/general/dark_background_general_post';
import { Alert } from '../bitesite-ui';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const header = 'Get in Touch!';

  const renderErrorMessage = () => {
    if (errorMessage) {
      return (
        <Alert alertType="error" className="alert" margin="30px 0 0 0">
          <Icon icon="mi:circle-warning" />
          <span className="body-small-light">{errorMessage}</span>
        </Alert>
      );
    }
    return null;
  };

  const renderSuccessMessage = () => {
    if (successMessage) {
      return (
        <Alert alertType="success" className="alert" margin="30px 0 0 0">
          <Icon icon="akar-icons:circle-check" />
          <span className="body-small-light">{successMessage}</span>
        </Alert>
      );
    }
    return null;
  };

  const renderSubmittingMessage = () => {
    if (isSubmitting) {
      return (
        <Alert alertType="warning" className="alert" margin="30px 0 0 0">
          <Icon icon="mi:circle-warning" /> <span className="body-small-light">Sending...</span>
        </Alert>
      );
    }
    return null;
  };

  const text = (
    <>
      <div className="body-regular contact-text-container">
        Excited about your project? Have some questions? Let us know below and we&apos;ll get back to you ASAP!
      </div>
      {renderErrorMessage()}
      {renderSuccessMessage()}
      {renderSubmittingMessage()}
      <div className="input-container">
        <label className="body-regular">Full Name</label>

        <input
          className="input-box-contact body-regular"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />

        <label className="body-regular">Email Address</label>

        <input
          className="input-box-contact body-regular"
          type="email"
          id="email"
          value={email}
          pattern=".+@globex\.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

        <label className="body-regular">Message</label>

        <textarea
          className="input-box-contact message body-regular"
          type="message"
          id="message"
          value={message}
          size="584"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
      </div>
    </>
  );

  const contactFormValid = () => {
    if (!firstName || !lastName || email.indexOf('@') < 0 || !message) {
      setErrorMessage('Please fill out all fields with valid information');
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setName('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    if (name) {
      const nameArr = name.split(' ');
      setFirstName(nameArr[0]);
      nameArr.shift();
      setLastName(nameArr.join(' '));
    }
  }, [name]);

  const handleContactFormSubmit = () => {
    if (contactFormValid()) {
      if (errorMessage) {
        setErrorMessage('');
      }
      setIsSubmitting(true);
      $.ajax({
        url: '/contact',
        method: 'POST',
        data: {
          first_name: firstName,
          last_name: lastName,
          email_address: email,
          message,
        },
        success: (response) => {
          setIsSubmitting(false);
          if (response.success) {
            setSuccessMessage(response.result_message || 'Your message was sent successfully!');
          } else {
            setErrorMessage(response.result_message || 'There was an error sending your message');
          }
          clearForm();
        },
        error: () => {
          window.alert('There was an error saving your question');
        },
      });
    }
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

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('contact-component-mount-point');
  if (element) {
    ReactDOM.render(<Contact />, element);
  }
});
